angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
     
    $scope.addListing = function() {
      $scope.listings.push({'code': $scope.input.inputCode, 'name': $scope.input.inputName, 'coordinates': {'latitude': $scope.input.inputLatitude, 'longitude': $scope.input.inputLongitude}, 'address': $scope.input.inputAddress});
      $scope.input="";
    };

    $scope.deleteListing = function(index) {
      Listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
      var tempResults;
      for(var i = 0; i<Listings.length; i++){
        if(Listings[i].code == index){
          tempResults = Listings[i];
        }
      }

      $scope.detailedInfo = tempResults;
    };
  }
]);