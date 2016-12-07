"use strict";

app.controller('BoardCtrl', function($scope, BoardFactory, AuthFactory) {

	$scope.board = {
		uid: "",
		title: ""
	};

	$scope.board.uid = AuthFactory.getUser();

	console.log($scope.board.uid);
	console.log(AuthFactory.getUser());

	$scope.createNewBoard = () => {
		console.log($scope.board);
		BoardFactory.createBoard($scope.board)
		.then( () => {
			$scope.$apply();
		});
	};
});