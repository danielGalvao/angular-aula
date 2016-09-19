angular.module('alurapic')
  .controller('FotosController',function($scope, $http){
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $http.get('v1/fotos').then(function(resp){
      $scope.fotos = resp.data;
    }).catch(function(error){
      console.log(error);
    });
    $scope.remover = function(foto){
      $http.delete('v1/fotos/'+foto._id)
        .success(function(){
          var indexFoto = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indexFoto, 1);
          $scope.mensagem = 'Foto'+foto.titulo+' foi removida com sucesso';
        })
        .error(function(erro){
          console.log(erro);
          $scope.mensagem = 'Foto'+foto.titulo+' não foi possivel remover';
        })
    }
  });
