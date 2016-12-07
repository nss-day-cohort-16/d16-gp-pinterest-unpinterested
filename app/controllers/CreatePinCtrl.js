"use strict";

app.controller('CreatePinCtrl', function($scope,$window,PinFactory, PostingBoard){
	console.log("$scope.pin1", $scope.pin);
$scope.pin = {
	name: '',
	img: '',
	description: ''
};

	$scope.pin.board = PostingBoard.postingBoard;

console.log("$scope.pin.board ", $scope.pin.board );

	$scope.createNewPin = () => {
		console.log("$scope.pin", $scope.pin);
		PinFactory.createPin($scope.pin)
		.then((retPin) => {
			$scope.$apply();
		});
	};
});