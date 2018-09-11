angular
  .module('vse', [
    'ui.router',
    'jtt_youtube',
    'jtt_vimeo',
    'ngSanitize'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$sceDelegateProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      '^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?\(vimeo|youtube)\.com(/.*)?$',
      'https://www.youtube.com/embed/*',
      'https://www.vimeo.com/api/*'
      ]);
  }]);