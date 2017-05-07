/**
 * Created by Administrator on 2017/5/7.
 */
var app=angular.module('pagination',[]);
app.controller('myCtrl',['$scope',function($scope){
    $scope.currentPage=1;   //当前页初始值为1
    $scope.dataSum=200;     //总页数为后台请求数据后的结果，此处是模拟数据

    $scope.paginationConfig={   //分页配置数据
        currentPage:$scope.currentPage,     //当前页数
        dataSum:$scope.dataSum,       //数据总条数
        pageSize:10,            //每页显示的数据条数，可随意设置
        getData:function(num){
            $scope.getInfoLIst(num);      //此处应为切换页面重新请求数据函数，此处为模拟函数
        }
    };

    //分页请求数据函数
    $scope.getInfoLIst=function(num){
        console.log(num);
    }
}]);