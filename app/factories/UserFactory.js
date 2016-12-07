"use strict";

app.factory('UserFactory', function($http,AuthFactory,FBCreds){
	 

	 let createFBUser = (userObj) => {
	 	return new Promise ((resolve, reject) => {
	 		$http.post(`${FBCreds.URL}/users.json`,
	 		angular.toJson(userObj))
	 		.success((obj) => {
	 			console.log("objufactory :", obj);
	 			resolve(obj);
	 	})
	 		.error((error) => {
	 			reject(error);
	 	});
	 	
	 	});
	 };

	 return {createFBUser};

});