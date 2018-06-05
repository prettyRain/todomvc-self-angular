(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!

    var myapp = angular.module('myapp',[]);
    myapp.controller('myController',['$scope',function($scope){
          $scope.items = [

		  ];
          /*回车添加数据*/
          $scope.myClick=function(){
			  if($scope.context!=null && $scope.context!=''){
          			$scope.items.push({id:Math.random(),completed:false,content:$scope.context,editing:false})
					$scope.context='';
				}
          }
          /*删除单个数据*/
          $scope.delete=function(id){
          	for(var i in $scope.items){
          		if($scope.items[i].id==id){
          			$scope.items.splice(i,1);
				}
			}
		  }
		  /*批量清除*/
		  $scope.clear=function(){
          	var arr = [];
			  for(var i in $scope.items){
				  if(!$scope.items[i].completed){
					  arr.push($scope.items[i]);
				  }
			  }
			  $scope.items=arr;
		  }
		  /*显示清除按钮*/
		  $scope.showclear=function(){
			  for(var i in $scope.items){
				  if($scope.items[i].completed){
					  return true;
				  }
			  }
			  return false;
		  }
		  /*双击呈编辑状态*/
		  $scope.textclick=function(id){
			  for(var i in $scope.items){
				  if($scope.items[i].id==id){
					  $scope.items[i].editing=true;
				  }
			  }
		  }
		  /*编辑完成保存*/
		  $scope.save=function(){
			  for(var i in $scope.items){
					  $scope.items[i].editing=false;
				  }
		  }
		  /*全选切换*/
		  $scope.checkAll=false;
		  $scope.$watch('checkAll',function(now,old){
			  for(var i in $scope.items){
				  $scope.items[i].completed=now;
			  }
		  })
	}])
})(angular);
