angular.module('app').controller('loginControler', loginControler);

loginControler.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS'];

function loginControler($scope,$rootScope,$location,APP_SETTINGS){
    
   $scope.modalRecuparSenhaeLogin = false;
   $scope.confirmado = false;
   $scope.naoExixteEmail = false;
   $scope.compartilha = "compartilha";
   var vm = this;
   
   var refbd = new Firebase(APP_SETTINGS.FIREBASE_URL);
   
   vm.Login = Login;
   vm.logout = logout;
   vm.recuperarSenhaModal = recuperarSenhaModal;
   vm.comfirmaEmeail = comfirmaEmeail;
   
   //$rootScope.user = [{"email":"daniel.silvamiranda02@gmail.com","password":"123"}];

   function Login(){
       
       
    //   if( localStorage.getItem = 'firebase:session::controle-app'){
           
    //       console.log(localStorage.getItem);
    //   }
       
       refbd.authWithPassword({
          "email": $scope.email,
          "password": $scope.password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
            //$rootScope.user = null;
          } else {
            console.log("Authenticated successfully with payload:", authData);
            $rootScope.user = {
                    name: authData.password.email,   
                    email: authData.password.email,
                    image: authData.password.profileImageURL
               };
               
               $location.path('/');
               $scope.$apply();
          }
        });
       
   }
   
   function logout(){
      
       refbd.unauth();
       $rootScope.user = null;
       localStorage.removeItem("firebase:session::bddorasol");
       $location.path('/login');
       
       
   }
   
   function recuperarSenhaModal(){
       
       $scope.modalRecuparSenhaeLogin = true;
   }
   
   function comfirmaEmeail(email){
       
        var ref = new Firebase(APP_SETTINGS.FIREBASE_URL);
        ref.resetPassword({
          email : email
        }, function(error){
          if (error === null){
            console.log("Password reset email sent successfully");
            $scope.confirmado = true;
            $scope.modalRecuparSenhaeLogin = false;
          } else {
            console.log("Error sending password reset email:", error);
            //$scope.modalRecuparSenhaeLogin = true;
            $scope.modalRecuparSenhaeLogin = false;
            $scope.naoExixteEmail = true;
          }
        });
       
       
   }
   
    
}