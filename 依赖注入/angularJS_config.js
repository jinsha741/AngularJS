<html>
   <head>
      <meta charset="utf-8">
      <script src="http://code.angularjs.org/1.7.8/angular.min.js"></script>
      <title>AngularJS title name</title>
   </head>

   <body>

      <h2>AngularJS 依赖注入</h2>

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
	//【config】
         mainApp.config(function(myProviderProvider) {
            return myProviderProvider;
         });
		  
	  //【provider】service,factory,value(除了constant)等都是provider的封装，
	  // provider必须有一个$get方法，也可以说provider是一个可配置的factory
	  mainApp.provider('myProvider' , function(){
	    this.$get = function() {
	      var factory = {};

	      factory.multiply = function(a, b) {
	      return a * b;
	      }
	      return factory;
	    }
	  });
		
     	//【value】Value是一个简单的javascript对象，用于向控制器传递值（初始化配置阶段）
        // value可以是string,number甚至function,它和constant的不同之处在于，它可以被修改，不能被注入到config中，但是它可以被decorator装饰
         mainApp.value("defaultInput", 5);
         
     	//【factory】创建 factory "MathService" 用于两数的乘积 （实现原生方法）
        // 首先创建一个对象，然后返回这个对象
	// MathService ： 服务名
         mainApp.factory('MathService', function() {
			 
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
         });
         
     	//【service】在 service 中注入 factory "MathService" （通过MathService实现自定义方法）
        // service类似于一个构造器,通过new关键字实例化对象，将一些属性和方法直接添加到 this 上，
        // 在service里面可以不用返回东西，因为AngularJS会调用new关键字来创建对象
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

         /*总结
	 1.所有的供应商都只被实例化一次，也就说他们都是单例的
	 2.除了constant，所有的供应商都可以被装饰器(decorator)装饰
	 3.value就是一个简单的可注入的值
	 4.service是一个可注入的构造器
	 5.factory是一个可注入的方法
	 6.decorator可以修改或封装其他的供应商，当然除了constant
	 7.provider是一个可配置的factory
	 */
			
      </script>
      
   </body>

</html>
