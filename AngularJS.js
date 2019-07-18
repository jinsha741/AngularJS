<!DOCTYPE html>
<html>
   
   <head>
      <meta charset="utf-8">
      <title>AngularJS  依赖注入</title>
	  <!-- 在这里 http://code.angularjs.org 获取 Angular 的最新版本 -->
	   
	  <!-- 1.AngularJS 应用程序由 ng-app 定义。应用程序在 <div> 内运行
           2.ng-controller="myCtrl" 属性是一个 AngularJS 指令。用于定义一个控制器
             myCtrl 函数是一个 JavaScript 函数
           3.AngularJS 使用$scope 对象来调用控制器
             在 AngularJS 中， $scope 是一个应用对象(属于应用变量和函数)
             控制器的 $scope （相当于作用域、控制范围）用来保存AngularJS Model(模型)的对象
           4.控制器在作用域中创建了两个属性 (firstName 和 lastName)
             ng-model 指令绑定输入域到控制器的属性（firstName 和 lastName）
      -->
	   
	  <!-- 在这里 http://code.angularjs.org 获取 Angular 的最新版本 -->
	  <!-- 在这里 http://code.angularjs.org 获取 Angular 的最新版本 -->
	  <!-- 在这里 http://code.angularjs.org 获取 Angular 的最新版本 -->
	  <!-- 在这里 http://code.angularjs.org 获取 Angular 的最新版本 -->
	  <!-- 在这里 http://code.angularjs.org 获取 Angular 的最新版本 -->
	  <!-- 在这里 http://code.angularjs.org 获取 Angular 的最新版本 -->
   </head>
   
   <body>
      <h2>AngularJS模板</h2>
      
      <div ng-app = "mainApp" ng-controller = "myCtrl">
		  名: <input type="text" ng-model="firstName"><br>
		  姓: <input type="text" ng-model="lastName"><br>
		  姓名: {{firstName + " " + lastName}}
      </div>
      
      <script src="http://code.angularjs.org/1.7.8/angular.min.js"></script>
      
      <script>
         
      </script>
      
   </body>
</html>
