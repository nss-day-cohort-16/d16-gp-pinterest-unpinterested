"use strict";

var app = angular.module('unpinterested', ['ngRoute']);

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain
	};

	firebase.initializeApp(authConfig);
	});