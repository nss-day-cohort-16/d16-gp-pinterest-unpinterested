"use strict";

app.controller('BoardViewCtrl', function($routeParams, $scope, $window){
	console.log("meow");
	$scope.greeting = "sup";

	let targ = $routeParams.specificBoard;
	console.log("targ", targ);

	// $scope.pins = PinFac	tory.getPinsForABoard()
});