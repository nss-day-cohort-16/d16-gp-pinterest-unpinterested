"use strict"; 

app.factory('PinFactory', function($http, AuthFactory, FBCreds){

	
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
		var x = postingBoard;
		console.log("x", x);
		return new Promise((resolve,reject) => {
			$http.get(`${FBCreds.URL}/pins.json?orderBy="board"&equalTo='${bId}'`)
			.success((pins) => {
				resolve(pins);
			})
			.error((error) => {
				reject(error);
			});
		});
	};


var postingBoard = null;

	return {createPin, postingBoard, getPinsForABoard};
});