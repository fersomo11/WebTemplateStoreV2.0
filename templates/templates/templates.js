(function() {
  var TemplatesCtrl;

  angular.module('templates').controller('TemplatesCtrl', TemplatesCtrl);

  TemplatesCtrl = (function() {
    TemplatesCtrl.$inject = ['$scope, $http'];

    function TemplatesCtrl($scope, $http) {
      this.$scope = $scope;
      this.$http = $http;
      this.$http.get('json/templates.json').success(function(data) {
        console.log(data);
        this.$scope.templates = data;
      });
      console.log('Controlador de templates!!!!!!!');
    }

    return TemplatesCtrl;

  })();

}).call(this);
