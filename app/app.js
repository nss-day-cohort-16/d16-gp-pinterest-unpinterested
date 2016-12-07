"use strict";

var app = angular.module('unpinterested', ['ngRoute']);

app.config(($routeProvider)=>{
    $routeProvider
    .when('/login', {
        templateUrl: 'partials/loginForm.html',
        controller: 'LoginCtrl'
    })
    .when('/logout', {
    	templateUrl: 'partials/logout.html',
    	controller: 'LogoutCtrl'
    })
    .when('/item/:specificItem', {
    	templateUrl: 'partials/itemModal.html',
    	controller: 'ItemViewCtrl'
    })
    .when('/item/new', {
    	templateUrl: 'partials/createPin.html',
    	controller: 'CreatePinCtrl'
    })
    .when('/board/:specificBoard', {
    	templateUrl: 'partials/boardView.html',
    	controller: 'BoardViewCtrl'  //doesn't exist yet
    })
    .when('/board/new', {
    	templateUrl: 'partials/createBoard.html',
    	controller: 'BoardCtrl'
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