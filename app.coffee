angular.module('WebTemplateStoreV2.0', ['ui.bootstrap','ui.utils','ui.router','ngAnimate'])
angular.module('WebTemplateStoreV2.0')

  # Add New States Above
  .config(($stateProvider, $urlRouterProvider) ->
    $urlRouterProvider.otherwise('/templates')
    return
 )
  .run(($rootScope) ->
    $rootScope.safeApply = (fn) ->
      phase = $rootScope.$$phase
      if phase is '$apply' or phase is '$digest'
        if fn and (typeof fn is 'function')
          fn()
          return 
      else 
        this.$apply fn
        return
    return
  )