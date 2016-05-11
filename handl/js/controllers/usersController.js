handlApp.controller('usersController', ['ipCookie','$scope', '$state', '$auth',
  function(ipCookie ,$scope, $state, $auth){

    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function() {
          $auth.submitLogin({
            name: $scope.registrationForm.name,
            email: $scope.registrationForm.email,
            password: $scope.registrationForm.password
          });
          $state.go('user.deliveries');
        });

    };
}]);
