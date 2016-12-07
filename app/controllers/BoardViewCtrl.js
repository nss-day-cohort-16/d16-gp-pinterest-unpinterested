"use strict";

app.controller('BoardViewCtrl', function($routeParams, $scope, $window,PinFactory){
	console.log("meow");
	$scope.greeting = "sup";

	let targ = $routeParams.specificBoard;
	console.log("targ", targ);

	// $scope.pins = PinFactory.getPinsForABoard()
	// .then((pins)=>{
	// 	console.log("pins", pins);
	// 	$scope.$apply();
	// });
	// console.log("$scope.pins", $scope.pins);



	PinFactory.getPinsForABoard()
	.then((pins)=>{
		$scope.pins = pins;
		$scope.$apply();
	});
});