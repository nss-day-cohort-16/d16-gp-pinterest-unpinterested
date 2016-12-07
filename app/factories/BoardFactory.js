"use strict"; 

app.factory('BoardFactory', function($http, AuthFactory, FBCreds){

	 let createBoard = (boardObj) => {
	 	console.log("boardObj", boardObj);
	 	return new Promise ((resolve, reject) => {
	 		$http.post(`${FBCreds.URL}/boards.json`,
	 		angular.toJson(boardObj))
	 		.success((obj) => {
	 			console.log("objufactory :", obj);
	 			resolve(obj);
	 	})
	 		.error((error) => {
	 			reject(error);
	 	});
	 	
	 	});
	 };
	 return{createBoard};
});