angular.module('testApp', ['angular-seo-header'])
  .config(function (seoOptionProvider) {
    seoOptionProvider.setOptions({
      title: {
        postfix:" | SEO"
      }
    });
  })
  .controller('TestController', ['$scope', function($scope) {
    $scope.title = "Postfix Sample";
  }]);