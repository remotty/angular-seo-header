angular.module('testApp', ['angular-seo-header'])
  .controller('TestController', ['seoService', function(seoService) {
    seoService.setTitle('New Title');
  }]);