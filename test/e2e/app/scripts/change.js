angular.module('testApp', ['angular-seo-header', 'ui.router'])
  .config(function ($urlRouterProvider, $stateProvider) {
    // default route
    $urlRouterProvider.otherwise('/');

    $stateProvider
      /* layout */
      .state('root', {
        url: '/',
        templateUrl: '/views/root.html'
      })
      .state('change', {
        url: '/change',
        templateUrl: '/views/change.html'
      })
  })
  .controller('TestController', ['$scope', function($scope) {
  }]);