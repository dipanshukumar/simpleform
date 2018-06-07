var app = angular.module("first", []);

     app.controller("mycont", function ($scope) {
        
         $scope.person = {
        fname : "dipanshu",
        lname : "Kumar",
        pass : "12345678",
        email : "dipanshu@gmail",
         };

            $scope.update = function (user) {
                $scope.person = angular.copy(user);
            };

            $scope.reset = function () {
                $scope.user = angular.copy($scope.person);
            };

            $scope.reset();
            
          /* this part is creating problem,json part is new to me.
            $http.get('copy.json').success(function(data){
                      $scope.people = data;
            });
          */
        
        });