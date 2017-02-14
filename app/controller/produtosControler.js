angular.module('app').controller('produtosControler', produtosControler);

produtosControler.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS', 'produtos','produtosBebidas','produtosLanches','produtosSobremesa','produtosFrutas'];

function produtosControler($scope,$rootScope,$location,APP_SETTINGS,produtos,produtosBebidas,produtosLanches,produtosSobremesa,produtosFrutas){
   $scope.produtosBebidasItem = produtosBebidas.data;
   $scope.produtosLanchesItem = produtosLanches.data;
   $scope.produtosSobremesaItem = produtosSobremesa.data;
   $scope.produtosFrutasItem = produtosFrutas.data;
   var idBebidas = 0;
   var idLanches = 0;
   var idSobremesa = 0;
   var idFrutas = 0;
   var urlAtual;
   var idTitulo;
   var produtoUrlSaida;
   var idProdutoSaida;
   var quantAtual;
   var calc;
   
   $scope.icone = {};
   $scope.IconesSelecionado;
   
   
   
   $scope.bebidasIcones = [
    {
     Img:"app/fonts/bebidas/svg/cup.svg",
     nome:'café',
     tipo:'cafe'
    },
    {Img:"app/fonts/bebidas/svg/drink-1.svg",
     nome:'suco',
     tipo:'suco'
    },
    {Img:"app/fonts/bebidas/svg/drink-2.svg",
     nome:'milk shake',
     tipo:'milk'
    },
    {Img:"app/fonts/bebidas/svg/drink-3.svg",
     nome:'refrigerante',
     tipo:'refri'
    },
    {Img:"app/fonts/bebidas/svg/drink-4.svg",
     nome:'leite',
     tipo:'leite'
    },
    {Img:"app/fonts/bebidas/svg/drink-5.svg",
     nome:'vitamina',
     tipo:'vitamina'
    },
    {Img:"app/fonts/bebidas/svg/drink-6.svg",
     nome:'leite',
     tipo:'leite'
    },
    {Img:"app/fonts/bebidas/svg/drink.svg",
     nome:'drink',
     tipo:'drink'
    },
    {Img:"app/fonts/bebidas/svg/fruit.svg",
     nome:'limonada',
     tipo:'limonada'
    }
    ];
    
    $scope.frutasIcones = [
    {Img:"app/fonts/frutas/fruit-1.svg",
     nome:'Abacaxi',
     tipo:'poteFruta'
    },
    {Img:"app/fonts/frutas/fruit-2.svg",
     nome:'Melancia',
     tipo:'poteFruta'
    },
    {Img:"app/fonts/frutas/fruit-3.svg",
     nome:'Pera',
     tipo:'poteFruta'
    },
    {Img:"app/fonts/frutas/fruit-4.svg",
     nome:'Limao',
     tipo:'poteFruta'
    },
    {Img:"app/fonts/frutas/fruit-5.svg",
     nome:'Banana',
     tipo:'poteFruta'
    },
    {Img:"app/fonts/frutas/icon-2211.svg",
     nome:'null',
     tipo:'poteFruta'
    },
    {Img:"app/fonts/frutas/strawberry.svg",
     nome:'Morango',
     tipo:'poteFruta'
    },
    {Img:"app/fonts/frutas/tea.svg",
     nome:'null',
     tipo:'poteFruta'
    }
    
    ];
    
    $scope.lanchesIcones = [
    {Img:"app/fonts/lanches/food-1.png",
     nome:'Hambuger',
     tipo:'lanche'
    },
    {Img:"app/fonts/lanches/food-2.png",
     nome:'Pao puma',
     tipo:'lanche'
    },
    {Img:"app/fonts/lanches/food-3.png",
     nome:'ovo',
     tipo:'lanche'
    },
    {Img:"app/fonts/lanches/food-4.png",
     nome:'Croasan',
     tipo:'lanche'
    },
    {Img:"app/fonts/lanches/food-5.png",
     nome:'Cachorro quente',
     tipo:'lanche'
    },
    {Img:"app/fonts/lanches/food.png",
     nome:'Warrp',
     tipo:'lanche'
    }
    
    ];
    
    $scope.sobremesasIcones = [
     
    {Img:"app/fonts/sobremesas/food-1.svg",
     nome:'Sorvete casquinha',
     tipo:'sorveteCasquinha'
    },
    {Img:"app/fonts/sobremesas/food-2.svg",
     nome:'Bombom',
     tipo:'bombom'
    },
    {Img:"app/fonts/sobremesas/food-3.svg",
     nome:'Bolo',
     tipo:'bolo'
    },
    {Img:"app/fonts/sobremesas/food-4.svg",
     nome:'Sorvete pote',
     tipo:'sorvetePote'
    },
    {Img:"app/fonts/sobremesas/food-5.svg",
     nome:'Picole',
     tipo:'sorvetePicole'
    },
    {Img:"app/fonts/sobremesas/food-6.svg",
     nome:'Bombom',
     tipo:'bombom'
    },
    {Img:"app/fonts/sobremesas/food.svg",
     nome:'Cup cake',
     tipo:'cupCake'
    }
    
    ];
    
   $scope.editarProduto;
   $scope.modalSaida = false;
   $scope.modalentrada = false;
   $scope.editarProdutoHides = false;
   
   
   angular.forEach($scope.produtosBebidasItem, function(value, key){
    idBebidas += 1;
   });
   angular.forEach($scope.produtosLanchesItem, function(value, key){
    idLanches += 1;
   });
   angular.forEach($scope.produtosSobremesaItem, function(value, key){
    idSobremesa += 1;
   });
   angular.forEach($scope.produtosFrutasItem, function(value, key){
    idFrutas += 1;
   });
   console.log(idBebidas);
   var urlProduto;
   var vm = this;
   $scope.ativaModalNovoProduto = false;
   
   $scope.cadastroProduto = [];

   vm.adicionarProduto = adicionarProduto;
   vm.cadastrarNovoProduto = cadastrarNovoProduto;
   vm.saida = saida;
   vm.comfirmaSaida = comfirmaSaida;
   vm.comfirmaEntrada = comfirmaEntrada;
   vm.closeModalSaida = closeModalSaida;
   vm.closeModalEntrada = closeModalEntrada;
   vm.entrada = entrada;
   vm.editarProduto = editarProduto;
   vm.confirmarEditarProduto = confirmarEditarProduto;
   vm.modoCardETabelaAtiva = modoCardETabelaAtiva;
   $scope.tituloCT = 'Modo card';
   
   $scope.modoCardBebidas = false;
   $scope.modoTabelaBebidas = true;
   var controle = 0;
   function modoCardETabelaAtiva(){
    
    
    
    if(controle == 0){
     
      $scope.modoCardBebidas = true;
      $scope.modoTabelaBebidas = false;
      $scope.tituloCT = 'Modo Tabela';
      controle += 1;
      console.log(controle);
     
    }else{
     
      $scope.modoCardBebidas = false;
      $scope.modoTabelaBebidas = true;
      $scope.tituloCT = 'Modo card';
      controle -= 1;
      console.log(controle);
     
    }
    
    
    //console.log('teste');
    
   }
   
   
   function saida(produto,id,quantatual){
     
     quantAtual = quantatual;
     produtoUrlSaida = produto;
     idProdutoSaida = id;
     $scope.ativaModalNovoProduto = false;
     $scope.modalSaida = true;
    
   }
   
   function entrada(produto,id,quantatual){
     
     quantAtual = quantatual;
     produtoUrlSaida = produto;
     idProdutoSaida = id;
     $scope.modalentrada = true;
    
   }
   
   function closeModalSaida(){
    
     $scope.modalSaida = false;
    
   }
   function closeModalEntrada(){
    
     $scope.modalentrada = false;
    
   }
   
   function comfirmaSaida(quantidade){
    
    calc = quantAtual - quantidade;
    var refQuant = new Firebase(APP_SETTINGS.FIREBASE_URL_PRODUTO+'/'+produtoUrlSaida+'/id'+produtoUrlSaida+idProdutoSaida);
    refQuant.update({ quant:calc});
    console.log(APP_SETTINGS.FIREBASE_URL_PRODUTO+'/'+produtoUrlSaida+'/id'+produtoUrlSaida+idProdutoSaida);
    console.log(quantidade);
    console.log(calc);
    
   }
   
   function comfirmaEntrada(quantidade){
    
    calc = parseFloat(quantidade) + parseFloat(quantAtual);
    var refQuant = new Firebase(APP_SETTINGS.FIREBASE_URL_PRODUTO+'/'+produtoUrlSaida+'/id'+produtoUrlSaida+idProdutoSaida);
    refQuant.update({ quant:calc});
    console.log(APP_SETTINGS.FIREBASE_URL_PRODUTO+'/'+produtoUrlSaida+'/id'+produtoUrlSaida+idProdutoSaida);
    //console.log(quantidade);
    //console.log(quantAtual);
    console.log(calc);
    //console.log(quantidade += quantAtual);
    
   }
   
   function confirmarEditarProduto(){
     
     var dataEdit = new Date();  
     //console.log($scope.editarProduto);
     var editarProdutoConfirma = new Firebase(APP_SETTINGS.FIREBASE_URL_PRODUTO+'/'+$scope.editarProduto.categoria+'/'+'id'+$scope.editarProduto.categoria+$scope.editarProduto.id);
     editarProdutoConfirma.set({ 'titulo': $scope.editarProduto.titulo, 'desc': $scope.editarProduto.desc,"ativo":$scope.editarProduto.status,"cat":$scope.editarProduto.categoria,"quant":$scope.editarProduto.quantidade,"id":$scope.editarProduto.id,"preco":$scope.editarProduto.preco,"data":dataEdit});
     console.log(APP_SETTINGS.FIREBASE_URL_PRODUTO+'/'+$scope.editarProduto.categoria+'/'+'id'+$scope.editarProduto.categoria+$scope.editarProduto.id);
   }
   
   function editarProduto(cat,titulo,id,quant,preco,data,ativo,desc){
    
     
     var dataEdit = new Date();
     
     
     $scope.editarProduto = {
       
       categoria:cat,
       id:id,
       titulo:titulo,
       desc:desc,
       quantidade:quant,
       preco:preco,
       status:ativo,
       data:dataEdit
      
     };
     console.log($scope.editarProduto);
     
     
     $scope.editarProdutoHides = true;
     console.log($scope.editarProduto);
     // console.log(editarProduto.titulo);
     // console.log(editarProduto.id);
     // console.log(editarProduto.quantidade);
     // console.log(editarProduto.preco);
     // console.log(editarProduto.data);
    
   }
   
   function adicionarProduto(valor){
       
       urlProduto = valor;
       //console.log("adicionar produto");
       $scope.ativaModalNovoProduto = true;
       if(urlProduto == "bebidas"){
          urlAtual = idBebidas += 1;
          $scope.IconesSelecionado = $scope.bebidasIcones;
          idTitulo = 'idbebidas';
       }else if(urlProduto == "lanches"){
          urlAtual = idLanches += 1;
          $scope.IconesSelecionado = $scope.lanchesIcones;
          idTitulo = 'idlanches';
       }else if(urlProduto == "sobremesas"){
          urlAtual = idSobremesa += 1;
          $scope.IconesSelecionado = $scope.sobremesasIcones;
          idTitulo = 'idsobremesas';
       }else if(urlProduto == "frutas"){
          urlAtual = idFrutas += 1;
          $scope.IconesSelecionado = $scope.frutasIcones;
          idTitulo = 'idfrutas';
       }
       
       
   }
   
   function cadastrarNovoProduto(){
    var tipoProduto = [];
    var arrayDeIconesSelecionado = angular.toJson( $scope.IconesSelecionado );
    var arrayDeIconesSelecionadoJSON = JSON.parse(arrayDeIconesSelecionado); 
    var tipo = $scope.icone.name;
    for(var i = 0; i < arrayDeIconesSelecionadoJSON.length ; i++){
          if(arrayDeIconesSelecionadoJSON[i].Img == tipo){
          console.log(arrayDeIconesSelecionadoJSON[i]);
          tipoProduto.push(arrayDeIconesSelecionadoJSON[i]);
      }
    }
    //console.log(arrayDeIconesSelecionadoJSON);
    var dataCadastro = new Date();  
    var NovoProduto = new Firebase(APP_SETTINGS.FIREBASE_URL_PRODUTO+'/'+urlProduto+'/'+idTitulo+urlAtual);
    NovoProduto.set({ 'titulo': $scope.cadastroProduto.titulo, 'desc': $scope.cadastroProduto.textArea,"ativo":$scope.cadastroProduto.status,"cat":urlProduto,"quant":$scope.cadastroProduto.quantidade,"id":urlAtual,"preco":$scope.cadastroProduto.preco,"data":dataCadastro,"icone":tipoProduto[0]});
    $scope.ativaModalNovoProduto = false;
    $location.path("/produtos");
    $scope.color;
    
    
    
       
   }
    
    
}