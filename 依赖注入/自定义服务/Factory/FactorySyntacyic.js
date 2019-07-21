var appModule = angular.module("appModule" , []);

appModule.constant("name" , "ZHANGYANG");

appModule.factory("nameTime" , function(name){
    return name + "----" + new Date();
});

// name是constant服务定义，相当于全局，不用传入function
appModule.controller("appController" , function(nameTime){
    this.name = nameTime;
});
