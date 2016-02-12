(function() {
  angular.module('templates', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

  angular.module('templates').config(function($stateProvider) {
    $stateProvider.state('templates', {
      url: '/templates',
      templateUrl: 'templates/templates/templates.html',
      controller: 'TemplatesCtrl'
    }).state('template-details', {
      url: '/templates/:templateId',
      templateUrl: 'templates/details/template-details.html',
      controller: 'TemplateDetailsCtrl'
    });
  });

}).call(this);
