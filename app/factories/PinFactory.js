"use strict"; 

app.factory('PinFactory', function($http, AuthFactory, FBCreds, PostingBoard){

	
	let createPin = (pinObj) => {
		return new Promise((resolve, reject) => {
			$http.post(`${FBCreds.URL}/pins.json`,
				angular.toJson(pinObj))
			.success((pin) => {
				resolve(pin);
			})
			.error((error) => {
				reject(error);
			});
		});
	};

	let getPinsForABoard =(bId) => {
		// var x = postingBoard;
		// console.log("x", x);
		let PB = PostingBoard.postingBoard;
		console.log("PB", PB);
		return new Promise((resolve,reject) => {
			$http.get(`${FBCreds.URL}/pins.json?orderBy="board"&equalTo="${PB}"`)
			.success((pins) => {
					let idArray = Object.keys(pins); 
					idArray.forEach(function(key){
					  pins[key].id = key;
					});
					console.log("id", idArray);
				resolve(pins);
				console.log("pins", pins);
			})
			.error((error) => {
				reject(error);
			});
		});
	};

	let deletePinsFromFB = (id) => {
		// let id = $event.target.id;
		console.log("id", id);
		return new Promise((resolve,reject) => {
			$http.delete(`${FBCreds.URL}/pins/${id}.json`)
			.success((pins) => {
				resolve(pins);
			})
			.error((error) => {
				reject(error);
			});
		});
	};


// var postingBoard = null;

	return {createPin, getPinsForABoard,deletePinsFromFB};
});