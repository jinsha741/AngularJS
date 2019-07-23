// 为了给应用配置路由，需要给应用创建一个模块。这个模块叫做appModule
var appModule = angular.module("appModule" , ["ngRoute"]);

// 配置 $routeProvider，AngularJS $routeProvider 用来定义路由规则
// 并且通过使用configAPI请求把$routeProvider注入到配置函数并且使用$routeProvider.whenAPI来定义路由规则
appModule.config(["$routeProvider" , function($routeProvider){
  $routeProvider
    .when("/" , {template : "此处应该有首页页面"})
    .when("/news" , {template : "此处应该有新闻页面"})
    .when("/sports" , {template : "此处应该有体育页面"})
    .when("/help" , {template : "此处应当有帮助页面"})
}]);
