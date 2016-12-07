"use strict";

var app = angular.module('unpinterested', ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider
    .when('/login', {
        templateUrl: 'partials/loginForm.html',
        controller: 'LoginCtrl'
    })
    .when('/logout', {
    	templateUrl: 'partials/logout.html',
    	controller: 'LogoutCtrl'
    })
    .when('/item/new', {
    	templateUrl: 'partials/createPin.html',
    	controller: 'CreatePinCtrl'
    })
    .when('/item/:specificItem', {
        templateUrl: 'partials/itemModal.html',
        controller: 'ItemViewCtrl'
    })
    .when('/board/new', {
    	templateUrl: 'partials/createBoard.html',
    	controller: 'BoardCtrl'
    })
    .when('/board/:specificBoard', {
        templateUrl: 'partials/boardView.html',
        controller: 'BoardViewCtrl'
    })
    .when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
    })
    .otherwise('/login');
});


app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain
	};

	firebase.initializeApp(authConfig);
	});