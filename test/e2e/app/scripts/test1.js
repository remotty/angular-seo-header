angular.module('testApp', ['angular-seo-header'])
  .controller('TestController', ['$scope', function($scope) {
    $scope.title = "Change Title";
  }]);