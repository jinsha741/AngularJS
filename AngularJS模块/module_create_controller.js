var appModule = angular.module("appModule" , []);

/**
 * $scope : 这里表示Controller看作是一个类，$scope服务就代表了这个类的作用域，
 *   通过$scope服务给这个类添加属性或者方法
 * 第一个参数 appController ： Controller的名称
 * 第二个参数 类型为数组，该数组用于注入当前Controller要用到的服务及实现业务逻辑的函数，
 *   这里要注意的是实现逻辑的函数始终是作为数组的最后一个元素，并且要将前面注入的服务作为该函数的参数传入
 * 
 */
appModule.controller("appController" , ["$scope" , function($scope){
    $scope.person = "ZHANG YANG";

    $scope.secondPerson = function(){
        $scope.person = "Jack";
    }

    $scope.thirdPerson = function(){
        $scope.person = "Rose";
    }
}]);
