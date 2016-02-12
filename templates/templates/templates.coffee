angular.module('templates')
  .controller 'TemplatesCtrl', TemplatesCtrl

class TemplatesCtrl
  @$inject: ['$scope, $http']
  constructor: (@$scope, @$http) ->
    @$http.get 'json/templates.json'
      .success (data) ->
        console.log data
        @$scope.templates = data
        return
    console.log 'Controlador de templates!!!!!!!'