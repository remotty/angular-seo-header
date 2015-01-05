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
          prefix: '',
          postfix: ''
        }
      };
      return {
        setOptions: function (newOpts) {
          angular.extend(opts, newOpts);
        },
        $get: function () {
          return opts;
        }
      };
    })
    .directive('seoTitle', ['$window', 'seoOption', function ($window, seoOption) {
      function setTitle(newTitle) {
        $window.document.title = (seoOption.title.prefix || '') + 
          (newTitle || '') + 
          (seoOption.title.postfix || '');
      }

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
              setTitle(newTitle);
            }
          );
        }
      };
    }]
  );
})();
