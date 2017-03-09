(function(){
    'use strict';
    
    angular
    .module('app.components')
    .directive('topbar', topbarDefinition);
    
    function topbarDefinition() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/topbar/topbar.html',
            scope: {
                text: '=',
                type: '='
            },
            controller: topbarDirectiveController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    
    function topbarDirectiveController() {
        var vm = this;

        //mobile menu
        $('.button-collapse').sideNav({
          menuWidth: 300, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true // Choose whether you can drag to open on touch screens
        });

        //tabs drag
        $(document).ready(function(){
          $('ul.tabs').tabs({
            swipeable: true
          });
        });
    }
    
})();