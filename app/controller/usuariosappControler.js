angular.module('app').controller('usuariosappControler', usuariosappControler);

usuariosappControler.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','usuario'];

function usuariosappControler($scope,$rootScope,$location,APP_SETTINGS,usuario){
    
    console.log(usuario.data);
}