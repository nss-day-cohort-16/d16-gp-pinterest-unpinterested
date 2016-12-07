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

	 let getBoards = function() {
	 	console.log("running get boards");
	 	let boards = [];
	 	return new Promise ((resolve, reject) => {
	 		$http.get(`${FBCreds.URL}/boards.json`)
	 		.success( (obj) => {
	 			console.log("obj", obj);
	 			let boardCollection = obj;
	 			Object.keys(boardCollection).forEach((key) => {
					boardCollection[key].id = key;
					boards.push(boardCollection[key]);
				});
	 			console.log("boards", boards);
	 			resolve(boards);
	 		})
	 			.error((error) => {
	 				reject(error);
	 			});
	 	}); 
	 };

	 return{createBoard, getBoards};
});