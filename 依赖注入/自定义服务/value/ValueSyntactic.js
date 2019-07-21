var appModule = angular.module("appModule" , []);
// 真正完整的写法是在模块的.config()方法中通过$provide服务去创建
appModule.config(function($provide){
    $provide.value("name" , "ZHANGYANG");
});
