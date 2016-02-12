(function() {
  angular.module('WebTemplateStoreV2.0', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

  angular.module('WebTemplateStoreV2.0').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/templates');
  }).run(function($rootScope) {
    $rootScope.safeApply = function(fn) {
      var phase;
      phase = $rootScope.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if (fn && (typeof fn === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };
  });

}).call(this);
