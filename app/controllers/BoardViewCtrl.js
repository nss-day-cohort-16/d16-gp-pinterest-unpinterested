"use strict";

app.controller('BoardViewCtrl', function($routeParams, $scope, $window,PinFactory,$location){
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

	$scope.deleteAPin = ($event) => {
		console.log("hi");
		console.log("$event", $event);
	PinFactory.deletePinsFromFB($event.target.id)
	.then((a) => {
		console.log("hi");
		// $location.url('#/main');
		$window.location.href = '#/main';
		$scope.$apply();
	});
};
});