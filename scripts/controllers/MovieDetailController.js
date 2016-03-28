angular.module('moviedb').controller('MovieDetailController', 
	['$scope', '$routeParams', '$location', 'APIClient', 'paths', 
	function($scope, $routeParams, $location, APIClient, paths){

		// Scope init
		$scope.model = {};
		$scope.uiState = 'loading';
		
		// Controller init
		$scope.$emit('ChangeTitle', 'Loading...');
		APIClient.getMovie($routeParams.id).then(
			// Movie found
			function(movie) {
				$scope.model = movie;
				$scope.uiState = 'ideal';
				$scope.$emit('ChangeTitle', $scope.model.title);
			},
			// Movie not found
			function(error) {
				// TODO: improve error management
				$location.url(paths.notFound);
			}
		);

}]);
