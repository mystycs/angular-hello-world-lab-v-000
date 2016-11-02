function MainController($scope) {
  $scope.contact = {
    name: 'Mark'
    email: 'me@mark.com'
    phone: '123-456-7890'
  }
}

angular
  .module('app')
  .controller('MainController', MainController)
