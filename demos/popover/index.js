angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', function($scope, $ionicPopover) {


  $ionicPopover.fromTemplateUrl('templates/popover.html', function(popover) {
    $scope.popover = popover;
  });

  $scope.demo = 'ios';
  $scope.setPlatform = function(p) {
    document.body.classList.remove('platform-ios');
    document.body.classList.remove('platform-android');
    document.body.classList.add('platform-' + p);
    $scope.demo = p;
  }

});
