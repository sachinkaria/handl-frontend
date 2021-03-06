handlApp.controller('newDeliveryController', [ '$scope', 'uiGmapIsReady', 'uiGmapGoogleMapApi', 'newDeliveryService', 'deliveriesService', 'directionsService', 'locationService',
function($scope, uiGmapIsReady, uiGmapGoogleMap, newDeliveryService, deliveriesService, directionsService, locationService){
  var self = this;
  $scope.deliveries = [];
  $scope.alertMessage = false;
  $scope.alertMessageFail = false;
  $scope.form = true;


  $scope.newDelivery = function(delivery){
    $scope.deliveries = [];
    $scope.deliveries.push(delivery);
    $scope.displayDirections(delivery);
      $scope.form = false;
  };

  $scope.editDelivery = function(){
    $scope.form = true;
  };

  $scope.createDelivery = function(delivery){
    newDeliveryService.create(delivery)

    .success(function(){
      $scope.alertMessage = true;
      $scope.form = false
    })
    .error(function(){
      $scope.alertMessageFail = true;
    });
  };


  $scope.map = locationService.map;
  $scope.marker = locationService.marker;
  $scope.options = locationService.options;


  $scope.displayDirections = function(delivery) {
    directionsService.getDeliveryDirections(delivery);
  };

  $scope.findMyLocation = function(){
    locationService.getMyLocation();
  };


}]);
