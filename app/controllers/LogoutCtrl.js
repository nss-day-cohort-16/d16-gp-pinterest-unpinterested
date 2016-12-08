"use strict";

app.controller('LogoutCtrl', function( AuthFactory, $window){

	AuthFactory.logoutUser()
	.then(()=>{
		AuthFactory.isAuthenticated()
		.then(()=>{
			$window.location.href = "#/login";
		});
	});
	
});