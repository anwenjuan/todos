angular.module('app',[])
.controller('todosCtrl',['$scope',function($scope){
    $scope.taskList=[];
    $scope.addTask = function(event){
        if(event.keyCode === 13){
            $scope.taskList.push({
                name: $scope.inp_task,
                isCompleted: false
            });
            $scope.inp_task = '';
        }
    }
    $scope.delTask = function(index){
        $scope.taskList.splice(index,1)
    }
}])