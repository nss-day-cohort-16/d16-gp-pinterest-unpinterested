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
				// let pinsArray = $.map(pins, function(value, index) {
				//     return [value];
				// });
				// console.log("pinsArray", pinsArray);
				resolve(pins);
			})
			.error((error) => {
				reject(error);
			});
		});
	};


// var postingBoard = null;

	return {createPin, getPinsForABoard};
});