angular.module('app', ['ngResource', 'ngRoute', 'toastr']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', { templateUrl: 'partials/main/main', controller: 'mvMainCtrl' });
});

angular.module('app').config(function (toastrConfig) {
    angular.extend(toastrConfig, {
        allowHtml: false,
        closeButton: false,
        closeHtml: '<button>&times;</button>',
        extendedTimeOut: 1000,
        iconClasses: {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning'
        },
        messageClass: 'toast-message',
        onHidden: null,
        onShown: null,
        onTap: null,
        progressBar: false,
        tapToDismiss: true,
        templates: {
            toast: 'toast.html',
            progressbar: 'progressbar.html'
        },
        timeOut: 5000,
        titleClass: 'toast-title',
        toastClass: 'toast'
    });
});


angular.module('app').run(['$templateCache', function ($templateCache) {

    $templateCache.put('toast.html', `
            <div class="{{toastClass}} {{toastType}}" ng-click="tapToast()">
                <div ng-switch on="allowHtml">
                    <div ng-switch-default ng-if="title" class="{{titleClass}}" aria-label="{{title}}">{{title}}</div>
                    <div ng-switch-default class="{{messageClass}}" aria-label="{{message}}">{{message}}</div>
                    <div ng-switch-when="true" ng-if="title" class="{{titleClass}}" ng-bind-html="title"></div>
                    <div ng-switch-when="true" class="{{messageClass}}" ng-bind-html="message"></div>
                </div>
                <progress-bar ng-if="progressBar"></progress-bar>
            </div>`);

    $templateCache.put('progressbar.html', `<div class="toast-progress"></div>`);



}]);