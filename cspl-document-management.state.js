(function() {
    'use strict';

    angular
        .module('nimbusApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('document-upload-management', {
                parent: 'entity',
                url: '/document-upload-management',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'global.title'
                },
                ncyBreadcrumb: {
                    label: 'Document Upload Management',
                    parent: 'home'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/components/cspl-document-management/document-upload-management.html',
                        controller: 'DocumentUploadManagementController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
                            $translatePartialLoader.addPart('error');
                            $translatePartialLoader.addPart('global');
                            return $translate.refresh();
                    }]
                }
            })


            .state('view-uploaded-documents', {
                parent: 'entity',
                url: '/view-uploaded-documents',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'global.title'
                },
                ncyBreadcrumb: {
                    label: 'View Uploaded Documents',
                    parent: 'home'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/components/cspl-document-management/view-uploaded-documents.html',
                        controller: 'ViewUploadedDocumentsController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
                            $translatePartialLoader.addPart('error');
                            $translatePartialLoader.addPart('global');
                            return $translate.refresh();
                    }]
                }
            });
    }
})();
