/**!
 * AngularJS SEO header service
 * @author Chungsub Kim <subicura@subicura.com>
 */

(function () {
  'use strict';

  angular.module('angular-seo-header', [])
    .provider('seoOption', function () {
      /* jshint camelcase: false */
      var opts = {
        title: {
          'default': document.title,
          'prefix': '',
          'postfix': ''
        }
      };
      return {
        setOptions: function (newOpts) {
          angular.extend(opts.title, newOpts.title);
        },
        $get: function () {
          return opts;
        }
      };
    })
    .service('seoService', ['seoOption', function (seoOption) {
      var $this = this;

      $this.setTitle = function(newTitle) {
        var title = newTitle || seoOption.title['default'];

        document.title = (seoOption.title.prefix || '') + 
          (title || '') + 
          (seoOption.title.postfix || '');
      };
    }])
    .directive('seoTitle', ['seoService', function (seoService) {
      return {
        restrict: 'AE',
        link: function (scope, element, attrs) {
          if (angular.isUndefined(attrs.seoTitle)) {
            element.remove();
          }

          scope.$watch(
            function () {
              return element.text();
            },
            function (newTitle) {
              seoService.setTitle(newTitle);
            }
          );

          scope.$on('$destroy', function () {
            seoService.setTitle();
          });
        }
      };
    }]);
})();
