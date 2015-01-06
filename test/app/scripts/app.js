angular.module('testApp', ['angular-seo-header', 'ui.router'])
  .config(function ($urlRouterProvider, $stateProvider, seoOptionProvider) {
    seoOptionProvider.setOptions({
      title: {
        postfix:" > test"
      }
    });

    // default route
    $urlRouterProvider.otherwise('/');

    $stateProvider
      /* layout */
      .state('root', {
        url: '/',
        templateUrl: '/views/root.html'
      })
      .state('main', {
        url: '/main',
        templateUrl: '/views/main.html'
      })
  })
  .controller('TestController', ['$scope', 'seoService', function($scope, seoService) {
    //$scope.title = "Change Title";
    seoService.setTitle('new title');
  }]);