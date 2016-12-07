"use strict";

app.controller('BoardCtrl', function($scope, BoardFactory, AuthFactory) {

	$scope.board = {
		uid: '',
		title: ''
	};
});