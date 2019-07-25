var appModule = angular.module("appModule" , []).controller("appController" , function($scope){
	     $scope.msg = '';
	     $scope.left = function(){
	     	return 100 - $scope.msg.length;	
	     };
	 });  
