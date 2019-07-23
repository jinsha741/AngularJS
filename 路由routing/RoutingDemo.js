var appModule = angular.module("appModule" , ["ngRoute"]);

appModule.config(["$routeProvider" , function($routeProvider){
  $routeProvider
    .when("/" , {template : "此处应该有首页页面"})
    .when("/news" , {template : "此处应该有新闻页面"})
    .when("/sports" , {template : "此处应该有体育页面"})
    .when("/help" , {template : "此处应当有帮助页面"})
}]);
