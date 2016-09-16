angular.module('alurapic')
.controller('FotoController', function($scope, $http) {
    $scope.foto = {};
    $scope.submeter = function(){
      if($scope.formulario.$valid){
        $http.post('/v1/fotos', $scope.foto).then(function(resp){
          $scope.mensagem = 'Foto Cadastrada com sucesso';
          $scope.foto = {};
        }).catch(function(error){
          $scope.mensagem = 'Não foi possivel salvar a foto';
        });
      }
    }
})
