angular.module('alurapic')
  .controller('FotosController',function($scope, $http){
    $scope.fotos = [];
    $scope.filtro = '';
    $http.get('v1/fotos').then(function(resp){
      $scope.fotos = resp.data;
    }).catch(function(error){
      console.log(error);
    });
  });
