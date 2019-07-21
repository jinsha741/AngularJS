var appModule = angular.module("appModule" , []);

// 真正完整的写法是在模块的.config()方法中通过$provide服务去创建
appModule.config(function($provide){
    $provide.value("name" , "ZHANGYANG");
});

// 创建好服务后通过AngularJS的注入机制将其注入到Controller中
// $scope服务的其中一个作用就是给Controller添加属性和方法
appModule.controller("appController" , ["$scope" , "name" , function($scope , name){
    $scope.name = name;
}]);
