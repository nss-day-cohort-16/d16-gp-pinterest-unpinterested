"use strict";

app.controller('MainCtrl', function($location, $scope, $window, BoardFactory,PinFactory
){
	$scope.greetings = 'hello';
	$scope.boards = null;
	BoardFactory.getBoards()
	.then((boards) => {
		$scope.boards = boards;
		$scope.$apply();
	});



	$scope.viewSelectedBoard = (boardID)=>{
		console.log("boardID", boardID);
		PinFactory.postingBoard = boardID;
		BoardFactory.getSingleBoard(boardID)

		.then((chosenBoard)=>{
			console.log("chosenBoard", chosenBoard);
			// $location.url("/board/{{chosenBoard.id}}");
			$window.location.href = "#/board/{{chosenBoard.id}}";
		});
	};

	
	
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