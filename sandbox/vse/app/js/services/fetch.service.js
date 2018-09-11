angular
  .module('vse')
  .factory('fetchService', ['$q', '$http', 'vimeoApiUrl', 'youtubeFactory', 'youtubeApiKey', 'vimeoApiToken',
  function($q, $http, vimeoApiUrl, youtubeFactory, youtubeApiKey, vimeoApiToken) {
    return {
      query: function(q) {
        return $q.all([
          this.queryYoutube(q),
          this.queryVimeo(q)
        ]);
      },

      queryYoutube: function(queryString) {
        return youtubeFactory
          .getVideosFromSearchByParams({
              q: queryString,
              maxResults: 15,
              key: youtubeApiKey
          }).then(function (response) {
            if (response && response.status === 200) {
              return response.data;
            }
          }).catch(function(error) {
            return error;
          });
      },

      queryVimeo: function(queryString) {
        var headers = {
          Authorization: 'Bearer ' + vimeoApiToken
        };

        return this.fetchImplementation('GET', vimeoApiUrl + "tags/" + queryString + "/videos", headers, {});
//         return $q.all([
//           this.fetchImplementation('GET', vimeoApiUrl + "tags/" + queryString + "/videos", headers, {}),
//           this.fetchImplementation('GET', vimeoApiUrl + "categories/" + queryString + "/videos", headers, {})
//         ])
      },

      fetchImplementation: function(method, url, headers, params) {
        return $http({
          method: method,
          url: url,
          headers: headers,
          params: params,
        }).then(function (response) {
          if (response && response.status === 200) {
            return response.data;
          }
        }).catch(function(error) {
          return error;
        });
      }
    }
  }]);