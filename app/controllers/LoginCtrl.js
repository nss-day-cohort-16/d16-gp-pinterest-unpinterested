"use strict";

app.controller('LoginCtrl', function($scope, AuthFactory, UserFactory, BoardFactory, $window){
	$scope.account = {
		name: '',
		email: '',
		password: ''
	};

	$scope.board = {
		uid: '',
		title: 'My Default Board'
	};
	console.log("AuthFactory.getUser",AuthFactory.getUser());

	$scope.register = () => {
	AuthFactory.createUser($scope.account)
	.then((sumtin) => {
		$scope.account.uid = sumtin.uid;
		$scope.board.uid = sumtin.uid;
	UserFactory.createFBUser($scope.account)
	.then((obj) => {
		BoardFactory.createBoard($scope.board);
	});
		console.log("sumtin",sumtin);
	});

	};


	$scope.login = () => {
	AuthFactory.loginUser($scope.account)
	.then((userData) => {
		console.log("user", userData);
		AuthFactory.isAuthenticated();
		$window.location.href = "#/main";
	});
	};
});