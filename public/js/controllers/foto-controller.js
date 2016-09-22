angular.module('alurapic')
.controller('FotoController', function($scope, recursoFoto, $routeParams) {
    $scope.foto = {};
    $scope.mensagem = '';


    if($routeParams.fotoId){
      recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
        $scope.foto = foto;
      }, function(erro){
        console.log(erro)        ;
        $scope.mensagem = 'Não foi possível obter a foto';
      });
    }

    $scope.submeter = function(){
      if($scope.formulario.$valid){
        if($scope.foto._id){
          recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
            $scope.mensagem = 'Foto '+$scope.foto.titulo+' editada com sucesso'
          }, function(erro){
            $scope.mensagem = 'Não foi possível alterar a foto '+$scope.foto.titulo;
          });
        }else{
          recursoFoto.save($scope.foto,function(){
            $scope.mensagem = 'Foto Cadastrada com sucesso';
            $scope.foto = {};
          }, function(erro){
            $scope.mensagem = 'Não foi possivel salvar a foto';
          });
        }
      }
    };

})
