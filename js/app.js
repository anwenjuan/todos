angular.module('app',[])
.controller('todosCtrl',['$scope',function($scope){
    $scope.taskList=[];
    $scope.addTask = function(event){
        if(event.keyCode === 13){
            if($scope.inp_task){
                $scope.taskList.push({
                    name: $scope.inp_task,
                    isCompleted: false,
                    isEditing:false
                });
                $scope.inp_task = '';
            }
        }
    }
    $scope.delTask = function(index){
        $scope.taskList.splice(index,1)
    }
    $scope.uncompletedNum = function(){
        var  num = 0;
        angular.forEach($scope.taskList, (value,index) => {
            if(!value.isCompleted) {
                num++;
            }
        })
        return num;
    }
    $scope.clearCompleted = function(){
        for(var i = 0; i < $scope.taskList.length; i++){
           if($scope.taskList[i].isCompleted){
            $scope.taskList.splice(i,1);
            i--;
           }
        }
    }
    $scope.toggleAll = function(){
        for(var i = 0; i < $scope.taskList.length; i++){
            $scope.taskList[i].isCompleted =  $scope.status;
        }
    }
    $scope.chooseState = function(){
        for(var i = 0; i < $scope.taskList.length; i++){
            if(!$scope.taskList[i].isCompleted){
                $scope.status = false;
                return;
            }
        }
        $scope.status = true;
    }
    $scope.editTask = function(item,event){
        for(var i = 0; i < $scope.taskList.length; i++){
            $scope.taskList[i].isEditing = false
        }
        item.isEditing = true;
        //编辑是时候自动获取焦点
        // console.log(angular.element(event.target).parent().next().find('input')[0])
        setTimeout(function(){
            angular.element(event.target).parent().next().find('input')[0].focus()
        },0)
    }
    $scope.cancleEdit = function(item){
        item.isEditing = false;
    }
}])