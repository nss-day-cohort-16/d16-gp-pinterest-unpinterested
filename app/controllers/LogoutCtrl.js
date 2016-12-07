"use strict";

app.controller('LogoutCtrl', function( AuthFactory, $window){

	AuthFactory.logoutUser()
	.then(()=>{
		$window.location.href = "#/login";
	});
	
});