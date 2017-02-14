angular.module('app').controller('cardapioControler', cardapioControler);

cardapioControler.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','cardapio'];

function cardapioControler($scope,$rootScope,$location,APP_SETTINGS,cardapio){
    
    console.log(cardapio.data);
}