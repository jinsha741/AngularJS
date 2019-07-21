var appModule = angular.module("appModule" , []);

appModule.config(function($provide){
    $provide.value("name" , "ZHANGYANG");
});
