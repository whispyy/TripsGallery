(function(){
    'use strict';
    
    angular
    .module('app.components')
    .directive('cards', cardsDefinition);
    
    function cardsDefinition() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/cards/cards.html',
            scope: {
                text: '=',
                type: '='
            },
            controller: cardsDirectiveController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    
    function cardsDirectiveController() {
        var vm = this;


    }
    
})();