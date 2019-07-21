var appModule = angular.module("appModule" , []);

appModule.value("name" , "ZHANGYANG");

// service(name, constructor)方法的第二个参数是函数构造器，
// 也就是函数的实例，所以currentDate服务的实体其实就是new Date()
// 也可以对factory的服务进行进一步的修改（传入factory服务名，返回factory服务名.方法）
appModule.service("currTime" , Date);

appModule.controller("appController" , ["name" , "currTime" , function(name , currTime){
    this.name = name + "------" + currTime;
}])
