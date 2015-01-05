angular.module('testApp', ['angular-seo-header'])
  .config(function (seoOptionProvider) {
    seoOptionProvider.setOptions({
      title: {
        prefix:"SEO | "
      }
    });
  })
  .controller('TestController', ['$scope', function($scope) {
    $scope.title = "Prefix Sample";
  }]);