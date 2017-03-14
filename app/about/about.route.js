(function(){
    'use strict';
    
    angular
    .module('app.about')
    .config(aboutRouting);
    
    aboutRouting.$inject = ['$routeProvider'];
    
    function aboutRouting($routeProvider) {
        $routeProvider.when('/about', {
           controller: 'AboutController',
           controllerAs: 'vm',
           templateUrl: 'app/about/about.html'
        });
    }
    
})();