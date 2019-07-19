//定义两个模块
var module1 = angular.module("module1" , []);
var module2 = angular.module("module2" , []);

angular.element(document).ready(function(){
  // 获得指定id的html元素
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");
  
  // 使用AngularJS的bootstrap方法给HTML元素指定模块
  angular.bootstrap(div1 , ["module1"]);
  angular.bootstrap(div2 , ["module2"]);
});
