"use strict";

app.controller('MainCtrl', function($scope, $window, BoardFactory){
	$scope.greetings = 'hello';
	$scope.boards = null;
	BoardFactory.getBoards()
	.then((boards) => {
		$scope.boards = boards;
		$scope.$apply();
	});
	
	
});

// app.controller('MainCtrl', function($scope, $window, BoardFactory){
// 	$scope.greetings = 'hello';
// 	$scope.boards = null;
// 	function bullshit() {
// 		BoardFactory.getBoards()
// 	.then((boards) => {
// 		$scope.boards = boards;
// 	});
// 	}
// 	bullshit();
// });