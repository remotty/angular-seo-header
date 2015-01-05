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
          default: document.title,
          prefix: '',
          postfix: ''
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
    .directive('seoTitle', ['seoOption', function (seoOption) {
      function setTitle(newTitle) {
        var title = newTitle || seoOption.title.default;

        document.title = (seoOption.title.prefix || '') + 
          (title || '') + 
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

          scope.$on('$destroy', function () {
            setTitle();
          });
        }
      };
    }]);
})();
