angular.module('app').controller('clientesControler', clientesControler);

clientesControler.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','clientes'];

function clientesControler($scope,$rootScope,$location,APP_SETTINGS,clientes){
    
    var vm = this;
    $scope.ativaModalNovoCliente = false;
    //var arrayClientes = [{ 'nome': $scope.clientesItem.nome, 'sobreNome': $scope.clientesItem.sobreNome,"status":$scope.clientesItem.status,"valorDevedor":$scope.clientesItem.valorDevedor,"valorCaixa":$scope.clientesItem.valorCaixa}];
    vm.ativaModalNovoCliente = ativaModalNovoCliente;
    vm.cadastrarNovoCliente = cadastrarNovoCliente;
    $scope.clientesItem = [];
    $scope.clientes = clientes.data;
    
    function cadastrarNovoCliente(){
        
        
     $scope.cadastrarNovoCliente = true;
     var NovoProduto = new Firebase(APP_SETTINGS.FIREBASE_URL_CLIENTES);
     NovoProduto.push({ 'nome': $scope.clientesItem.nome, 'sobreNome': $scope.clientesItem.sobreNome,"status":$scope.clientesItem.status,"valorDevedor":$scope.clientesItem.valorDevedor,"valorCaixa":$scope.clientesItem.valorCaixa});
     //console.log($scope.clientesItem.nome);
     //$location.path(/home);
        
    }
    function ativaModalNovoCliente(){
        
        
     $scope.ativaModalNovoCliente = true;   
        
        
    }
    
    
    
    
}