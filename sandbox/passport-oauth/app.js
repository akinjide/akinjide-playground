const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const GoogleStrategy = require('passport-google-oauth20')

const router = express.Router()
const app = express()

const User = mongoose.model('user', new mongoose.Schema({
  username: String,
  auth_id: String,
  provider: String,
  thumbnail: String,
  added_at: Date
}))

const keys = {
  google: {
    clientID: '',
    clientSecret: ''
  },
  mongo: {
    uri: ''
  },
  session: {
    cookieKey: 'aGVsbG93b3JsZA=='
  }
}

for (const prop in keys) {
  for (const key of Object.keys(keys[prop])) {
    const requiredValue = keys[prop][key]

    if (!requiredValue) {
      return console.log('missing or configure %s %s key', prop, key)
    }
  }
}

mongoose.connect(keys.mongo.uri, { useNewUrlParser: true })
mongoose.connection.on('error', console.error)
configurePassport()

app.set('routes', routes())
app.set('view engine', 'ejs')
app.use(cookieSession({ maxAge: 24 * 60 * 60 * 1000, keys: [keys.session.cookieKey] }))
app.use(passport.initialize())
app.use(passport.session())
app.get('/', (req, res) => res.render('home', { user: req.user }))
app.use('/auth', app.get('routes').authenticate)
app.use('/profile', app.get('routes').profile)


///////////////////


function requireLogin(req, res, next) {
  if (!req.user) {
    return res.redirect('/auth/login')
  }

  next()
}

function routes() {
  return {
    get authenticate () {
      router.get('/login', (req, res) => {
         res.render('login', { user: req.user })
      })

      router.get('/google', passport.authenticate('google', {
        scope: ['profile', 'email']
      }))

      router.get('/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/profile')
      })

      router.get('/logout', (req, res) => {
        req.logout()
        res.redirect('/')
      })

      return router
    },
    get profile () {
      router.get('/', requireLogin, (req, res) => {
        app.locals.user = req.user
        res.render('profile')
      })

      return router
    }
  }
}

function configurePassport() {
  passport.serializeUser((user, callback) => callback(null, user.id))

  passport.deserializeUser((id, callback) => {
    User.findById(id)
      .then(response => callback(null, response))
      .catch(error => callback(error))
  })

  passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, callback) => {
    User.findOne({ auth_id: profile.id })
      .then(response => {
        if (response) {
          return User.update(
            { auth_id: response.auth_id },
            { thumbnail: profile._json.image.url },
            { fields: '_id' }
          )
          .then(() => response)
        }

        const user = User({
          username: profile.displayName,
          auth_id: profile.id,
          provider: profile.provider,
          thumbnail: provider._json.image.url,
          added_at: Date.now()
        })

        return user.save()
      })
      .then(response => callback(null, response))
      .catch(error => callback(error))
  }))
}


app.listen(3000, () => console.log('*:3000'))