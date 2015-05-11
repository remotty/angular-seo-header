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
    }])
    .directive('seoHead', function () {
      return {
        restrict: 'A',
        link: function (scope, element) {
          if(element.attr('property')) {
            var metas = angular.element.find('meta');
            for(var i=0; i<metas.length; i++) { // unique meta property
              if (element.attr('property') == angular.element(metas[i]).attr('property')) {
                angular.element(metas[i]).remove();
              }
            }
          }
          
          angular.element('head').append(element);

          scope.$on('$destroy', function () {
            element.remove();
          });
        }
      };
    });
})();
