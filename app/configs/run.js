angular.module('app').run(function($rootScope, $location){
    
    //$rootScope.user = null;
    var clienteLocalStorage = localStorage.getItem('firebase:session::controle-app');
    var clienteLocalStorageArray = JSON.parse(clienteLocalStorage);
    //console.log(JSON.parse(clienteLocalStorage));
    
    $rootScope.$on("$routeChangeStart", function(event, next, current){
        
        if($rootScope.user == null && clienteLocalStorage == null){
            
            $location.path("/login");
            console.log($rootScope.user);
            
        
        }        
               $rootScope.user = {
                   
                     name:  clienteLocalStorageArray.password.email,   
                     email: clienteLocalStorageArray.password.email,
                     image: clienteLocalStorageArray.password.profileImageURL
                     
               };
        
        
    });
    
    
});