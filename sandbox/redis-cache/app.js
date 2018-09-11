const sqlite3 = require('sqlite3').verbose()
const redis = require("redis")

const file = "db/chinook.db"
const bigQuery = "SELECT * FROM customers"
const db = new sqlite3.Database(file)
const client = redis.createClient()

client.on("error", console.error)

console.time("QueryTime")

client.get(bigQuery, (err, value) => {
  if (err != null) {
    return console.error(err)
  }

  if (value) {
    console.log("RedisCache:", value)
    console.timeEnd("QueryTime")
  } else {

    db.serialize(() => {
      db.all(bigQuery, (err, value) => {
        if (err != null) {
          return console.error(err)
        }

        if (value) {
          console.timeEnd("QueryTime")
          console.log("SQLiteQuery:", value.length)
        }

        client.set(bigQuery, value.length, (err) => {
          if (err != null) {
            return console.error(err)
          }

          // client.expire(bigQuery, 20)
          console.log("done")
        })

        return db.close()
      })
    })

  }
})
