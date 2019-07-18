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

	/*AngularJS模块可以在被加载和执行之前对模块自身进行配置。
	  当你需要在AngularJS模块加载之前进行配置，就要用到config。
	  只有提供者(Provider)和常量(constant)才能注入到config中 
	*/
	//【provider】通过 provider 创建一个 service、factory等(配置阶段)
	// Provider 中提供了一个 factory 方法 get()，它用于返回 value/service/factory
         mainApp.config(function($provide) {
            $provide.provider('MathService', function() {
               this.$get = function() {
		       
		  /*
		    var i = {};这是通过Json方式定义一个函数对象，
		    该函数对象体为空，但不能说对象为空，执行alert(i)绝对不是null,
		    不是等效于var i = new Object();语句,这个语句是在用Object原型创建实例,
		    而var i = {};语句是在定义一个函数对象
		  */
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
         
     	//【factory】可以认为是设计模式中的工厂方法， 就是你提供一个方法， 该方法返回一个对象的实例，
	    // 对于 AngularJS 的 factory 来说， 就是先定义一个对象， 给这个对象添加属性和方法， 然后返回这个对象
	    // MathService ： 该方法名
        // 最后controller 拿到的对象就是下面代码中return的对象，相当于这样的代码：var factoryObj = new MathService();
         mainApp.factory('MathService', function() {
            var factory = {};
            
            factory.multiply = function(a, b) {
               return a * b;
            }
            return factory;
         });
         
     	//【service】通过new运算符进行实例化，可以认为是一个类型，只要把属性和方法添加到this对象上即可，不用显式返回什么对象
        // CalcService ： 该方法名
        // 最后controller 拿到的对象就是下面代码中this指向的对象，相当于这样的代码：var serviceObj = new CalcService();
         mainApp.service('CalcService', function(MathService){
            this.square = function(a) {
               return MathService.multiply(a,a);
            }
         });
         
		  
         //【constant】 constant(常量)用来在配置阶段传递数值，注意这个常量在配置阶段是不可用的。
         /* 
	     mainApp.constant("configParam", "constant value"); 
	     */

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
