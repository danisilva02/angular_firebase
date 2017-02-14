angular.module("app").factory("aplicativoAPI", function($http, APP_SETTINGS){
    
    var _getProdutos = function(){
        
        return $http.get(APP_SETTINGS.FIREBASE_URL_PRODUTO+'.json');
       
    };
    var _getProdutosBebidas = function(){
        
        return $http.get(APP_SETTINGS.FIREBASE_URL_PRODUTO+'/bebidas.json'); 
        
    };
    var _getProdutosLanches = function(){
        
        return $http.get(APP_SETTINGS.FIREBASE_URL_PRODUTO+'/lanches.json'); 
    };
    var _getProdutosSobremesas = function(){
        
        return $http.get(APP_SETTINGS.FIREBASE_URL_PRODUTO+'/sobremesas.json'); 
    };
    var _getProdutosFrutas = function(){
        
        return $http.get(APP_SETTINGS.FIREBASE_URL_PRODUTO+'/frutas.json'); 
    };
    
    var _getClientes = function(){
        
        return $http.get(APP_SETTINGS.FIREBASE_URL_CLIENTES+'.json'); 
    };
    
    var _getCardapio = function(){
        
        return $http.get(APP_SETTINGS.FIREBASE_URL_CARDAPIO+'.json'); 
    };
    
    var _getUsuariosapp = function(){
        
        return $http.get(APP_SETTINGS.FIREBASE_URL_USUARIOSAPP+'.json'); 
    };
    

    return{
        
        getProdutos: _getProdutos,
        getProdutosBebidas:_getProdutosBebidas,
        getProdutosLanches:_getProdutosLanches,
        getProdutosSobremesas:_getProdutosSobremesas,
        getProdutosFrutas:_getProdutosFrutas,
        getClientes: _getClientes,
        getCardapio: _getCardapio,
        getUsuariosapp:_getUsuariosapp
        
        
    };
    
});