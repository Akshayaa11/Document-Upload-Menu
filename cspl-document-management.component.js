(function() {
    'use strict';

    angular
        .module('csplDocumentManagementMenuModule')
        .component('csplDocumentManagementMenu', {
            bindings: {
                
            },
            templateUrl: '/bower_components/cspl-document-management/cspl-document-management-menu.html',
            controller: csplDocumentManagementMenuController,
            controllerAs: 'vm'
        });

        csplDocumentManagementMenuController.$inject = ['$scope'];

    function csplDocumentManagementMenuController($scope) {

        // Scope Variable's
        var vm = this;

        vm.expandSubMenu = expandSubMenu
        
        var subMenuElement = document.getElementById('document-upload-sub-menu');

        //On expand, collapse all other menus opened
        function expandSubMenu(){

            if(!subMenuElement.classList.contains('in')){
                collapseAllSubMenu();
            }
            
        }

        //Prevent menu collapsing on sub menu click
        subMenuElement.addEventListener("click", function(e) {
           
            e.stopPropagation();
            e.preventDefault();
        });

        //expand all the submenu that have matched (only if the menu search is not empty)
        function collapseAllSubMenu(){
            //obtain all the element having sub-menu as the class name
            var subMenuElement = document.getElementsByClassName('sub-menu');
            var i =0;
            //loop through all the element and remove in class to collapse it and 0px indicates collapsed state of menu
            for ( i = 0;i<subMenuElement.length;i++){
                subMenuElement[i].classList.remove("in");
                subMenuElement[i].style.height = '0px';
            }
            
            //loop through all the element and remove active class (in expanded format all the entities are in expanded format)
            var subMenuElement = document.getElementsByClassName('nav-dashboards');
            var i =0;
            for ( i = 0;i<subMenuElement.length;i++){
                subMenuElement[i].classList.remove("active");
            }
            

        }
        var menuElements = document.getElementsByClassName("nav-dashboards");

        //On expand of other menus, collapse this menu
        for (var i = 0; i < menuElements.length; i++) {
            if(!menuElements[i].classList.contains('document-management-menu')){
                menuElements[i].addEventListener('click', onExpandOfOtherMenu, false);
            }
            
        }
        
        
        function onExpandOfOtherMenu(element){
            subMenuElement.classList.remove("in");
            subMenuElement.style.height = '0px';
        }

    }
})();
