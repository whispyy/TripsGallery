(function(){
    'use strict';
    
    angular
    .module('app.home')
    .config(helloRouting);
    
    helloRouting.$inject = ['$routeProvider'];
    
    function helloRouting($routeProvider) {
        $routeProvider.when('/', {
           controller: 'HomeController',
           controllerAs: 'vm',
           templateUrl: 'app/home/home.html'
        });
    }
    
})();