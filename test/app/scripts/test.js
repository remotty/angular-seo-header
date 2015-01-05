angular.module('testApp', ['angular-seo-header'])
  .config(function (seoOptionProvider) {
    seoOptionProvider.setOptions({
      title: {
        postfix:" > test"
      }
    });
  })
  .controller('TestController', ['$scope', function($scope) {
    $scope.title = "Change Title";
  }]);