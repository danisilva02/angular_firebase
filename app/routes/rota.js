angular.module("app").config(function($routeProvider){
    
    $routeProvider
        .when('/',{
            controller: 'homeControler',
            controllerAs:'vm',
            templateUrl:'app/views/home.html'
            
     });
     $routeProvider.when('/produtos',{
            controller: 'produtosControler',
            controllerAs:'vm',
            templateUrl:'app/views/produtos.html',
            resolve:{
            produtos: function(aplicativoAPI){
                return aplicativoAPI.getProdutos();
            
            },
            produtosBebidas: function(aplicativoAPI){
                return aplicativoAPI.getProdutosBebidas();
            
            },
            produtosLanches: function(aplicativoAPI){
                return aplicativoAPI.getProdutosLanches();
            
            },
            produtosSobremesa: function(aplicativoAPI){
                return aplicativoAPI.getProdutosSobremesas();
            
            },
            produtosFrutas: function(aplicativoAPI){
                return aplicativoAPI.getProdutosFrutas();
            
            }
                
            }
     });
     $routeProvider.when('/clientes',{
            controller: 'clientesControler',
            controllerAs:'vm',
            templateUrl:'app/views/clientes.html',
            resolve:{
            clientes: function(aplicativoAPI){
                return aplicativoAPI.getClientes();
            
            }
                
            }
     });
     $routeProvider.when('/cardapio',{
            controller: 'cardapioControler',
            controllerAs:'vm',
            templateUrl:'app/views/cardapio.html',
            resolve:{
            cardapio: function(aplicativoAPI){
                return aplicativoAPI.getCardapio();
            
            }
                
            }
     });
     $routeProvider.when('/usuariosapp',{
            controller: 'usuariosappControler',
            controllerAs:'vm',
            templateUrl:'app/views/usuariosapp.html',
            resolve:{
            usuario: function(aplicativoAPI){
                return aplicativoAPI.getUsuariosapp();
            
            }
                
            }
     });
     $routeProvider.when('/login',{
            controller: 'loginControler',
            controllerAs:'vm',
            templateUrl:'app/views/login.html'
     });
    
});