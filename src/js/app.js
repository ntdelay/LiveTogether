angular.module('LiveTogether', [
  'ngRoute',
  'mobile-angular-ui',
  'LiveTogether.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});