angular
  .module('vse')
  .controller('MainController', ['fetchService', '$q', '$sce', function(fetchService, $q, $sce) {
    var vm = this;

    vm.searchVideo = searchVideo;
    vm.sanitizeHtml = sanitizeHtml;
    vm.youtubeData = [];
    vm.vimeoData = [];
    vm.errorMessage;
    vm.isLoading = false;

    function searchVideo(q) {
      vm.isLoading = true;

      fetchService.query(q)
        .then(function(response) {
          var youtubeData = response[0];
          var vimeoData = response[1];

          vm.youtubeData = youtubeData.items;
          vm.vimeoData = vimeoData.data;
          vm.isLoading = false;
        })
        .catch(function(error) {
          vm.errorMessage = 'Something went wrong!';
        });
    }

    function sanitizeHtml(html) {
      return $sce.trustAsHtml(html);
    };

  }]);