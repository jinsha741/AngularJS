// 第一种，设置在 Module 的 Config 阶段，设置 routeProvider，提供简单的 template 模板字符串，
// 当被该路径模式被请求时，将 template 模板字符串渲染在 ng-view 位置
var appModule = angular.module("appModule" , ["ngRoute"]);
appModule.config(["$routeProvider" , function($routeProvider){
$routeProvider.when('/',{template:'这是首页页面'}).otherwise({redirectTo:'/'});


// 第二种，设置 templateUrl，且页面文件中存在 type为text/ng-template 的模板 js 片段，
// 将会搜索 id 等于 templateUrl 的模板 js，并渲染在 ng-view 的位置。
<script type="text/ng-template" id="1">...</script>
  
var appModule = angular.module("appModule" , ["ngRoute"]);
appModule.config(["$routeProvider" , function($routeProvider){
$routeProvider.when('/',{templateUrl:'1'}).otherwise({redirectTo:'/'});

// 第三种，设置 templateUrl，如果页面文件中不存在与 tempalteUrl 相匹配的 js 模板，则通过相对路径向服务器请求资源，请求完毕再渲染出来。
var appModule = angular.module("appModule" , ["ngRoute"]);
appModule.config(["$routeProvider" , function($routeProvider){
$routeProvider.when('/',{templateUrl:'view/tamplate.html'}).otherwise({redirectTo:'/'});
