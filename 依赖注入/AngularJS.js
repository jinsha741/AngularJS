<!DOCTYPE html>

<html>
   <head>
      <meta charset="utf-8">
      <script src="http://code.angularjs.org/1.7.8/angular.min.js"></script>
      <title>AngularJS title name</title>
   </head>

   <body>

      <h2>AngularJS 依赖注入</h2>

	// 静态页面实现
      <div ng-app = "mainApp" ng-controller = "CalcController">
         <p>输入一个数字: <input type = "number" ng-model = "number" /></p>
         <button ng-click = "square()">X<sup>2</sup></button>
         <p>结果: {{result}}</p>
      </div>
      
      <script>
         var mainApp = angular.module("mainApp", []);       //通过angular.module函数来创建模块
         
	//【provider】通过 provider 创建一个 service、factory等(配置阶段)
	// Provider 中提供了一个 factory 方法 get()，它用于返回 value/service/factory
         mainApp.config(function($provide) {
            $provide.provider('MathService', function() {
               this.$get = function() {
                  var factory = {};

                  factory.multiply = function(a, b) {
                     return a * b;
                  }
                  return factory;
               };
            });
         });
		
     	//【value】Value是一个简单的javascript对象，用于向控制器传递值（初始化配置阶段）
         mainApp.value("defaultInput", 5);
         
     	//【factory】创建 factory "MathService" 用于两数的乘积
         mainApp.factory('MathService', function() {
            var factory = {};
            
            factory.multiply = function(a, b) {
               return a * b;
            }
            return factory;
         });
         
     	//【factory】在 service 中注入 factory "MathService"(依赖注入过程)
         mainApp.service('CalcService', function(MathService){
            this.square = function(a) {
               return MathService.multiply(a,a);
            }
         });
         
		  
         //【constant】 constant(常量)用来在配置阶段传递数值，注意这个常量在配置阶段是不可用的。
         /* mainApp.constant("configParam", "constant value"); */

         // AngularJS 控制器操作
         mainApp.controller('CalcController', function($scope, CalcService, defaultInput) {
            $scope.number = defaultInput;
            $scope.result = CalcService.square($scope.number);

            $scope.square = function() {
               $scope.result = CalcService.square($scope.number);
            }
         });
			
      </script>
      
   </body>

</html>
