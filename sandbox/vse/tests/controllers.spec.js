describe('MainController', function() {
  var $controller;

  beforeEach(function() {
    module('vse', 'ngSanitize');

    inject(function(_$controller_, _$httpBackend_){
      $controller = _$controller_;
    })
  });

  describe('Main controller', function() {
    var $rootScope, $scope, controller, fetchService, $this, $q;

    beforeEach(inject(function(_$rootScope_, _fetchService_, _$q_) {
      $rootScope = _$rootScope_;
      fetchService = _fetchService_;
      $q = _$q_;
      $scope = {};

      controller = function() {
        return $controller('MainController', {
          $scope: $scope,
          fetchService: fetchService
        });
      };
    }));

    it('should be created successfully', function () {
      $this = controller();

      expect(typeof $this).toEqual('object');
      expect($this).toBeDefined();
    });

    describe('after activate', function() {
      it('should have a falsy for is Loading', function () {
        $this = controller();

        expect($this.isLoading).toBe(false);
      });

      it('should have evaluate HTML string', function () {
        $this = controller();
        var actual = "<h1>vse</h1>";
        var expected = /<h1>vse<\/h1>/;

        expect($this.sanitizeHtml(actual)).toMatch(expected);
      });

      it('should have dataStores defined', function() {
        $this = controller();

        expect($this.youtubeData).toBeDefined();
        expect($this.vimeoData).toBeDefined();
      });

      it('should load search results', function () {
        var query = 'programming';
        var videos = [
          { items: {
            id: "f7e3c74c7aad",
            title: 'Learn Node.js in 15 minutes',
            tag: ['programming', 'Node.js'] }
          },
          { data: {
            id: '8e5b861816bf',
            title: 'Monolith or Microservices',
            tag: ['programming', 'scaling'] }
          }
        ];

        $this = controller();

        spyOn(fetchService, 'query').and.callFake(function() {
          var deferred = $q.defer();
          deferred.resolve(videos);
          return deferred.promise;
        });

        $this.searchVideo(query);
        $rootScope.$apply();

        expect($this.youtubeData.id).toBe(videos[0].items.id);
        expect($this.vimeoData.id).toBe(videos[1].data.id);
        expect(fetchService.query).toHaveBeenCalledWith(query);
      });

      it('should set result status to error', function () {
        var query = 'programmingzz';

        $this = controller();

        spyOn(fetchService, 'query').and.callFake(function() {
          var deferred = $q.defer();
          deferred.reject();
          return deferred.promise;
        });

        $this.searchVideo(query);
        $rootScope.$apply();

        expect($this.errorMessage).toBe('Something went wrong!');
        expect(fetchService.query).toHaveBeenCalledWith(query);
      });
    });
  });
});
