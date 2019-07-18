<!DOCTYPE html>

<html>
   <head>
      <meta charset="utf-8">
      <script src="http://code.angularjs.org/1.7.8/angular.min.js"></script>
      <title>AngularJS 外部控制器调用方法</title>
   </head>

   <body>
      <h2>AngularJS 外部控制器调用方法</h2>
      
      <script>
          <div ng-app="myApp" ng-controller="namesCtrl">

            <ul>
              <li ng-repeat="x in names">
                {{ x.name + ', ' + x.country }}
              </li>
            </ul>
          </div>
      </script>
      <script src="namesController.js"></script>

   </body>

</html>
