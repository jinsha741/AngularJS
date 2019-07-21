var appModule = angular.module("appModule" , []);

appModule.config(function($provide){
    $provide.value("name" , "ZHANGYANG");
});

// 上述代码没有将$scope服务注入到这Controller中，
// 而是使用this创建了name属性，this代表Controller的实例
appModule.controller("appController" , ["name" , function(name){
    this.name = name;
}]);
