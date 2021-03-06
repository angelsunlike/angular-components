/**
 * Created by Administrator on 2017/5/7.
 */
app.directive('pagination',function(){
    return{
        templateUrl:'./static/templates/pagination.html',
        scope:{
            config:'=config'
        },
        link:function(scope,element,attrs){
            scope.pageArr=[];
            scope.pages='';
            scope.currentPage=scope.config.currentPage; //当前页
            scope.getInfo=scope.config.getData;  //切换分页请求数据函数
            scope.totalPages=Math.ceil(scope.config.dataSum/scope.config.pageSize);//一共多少页

            //设置分页数组
            setPagesArr();
            function setPagesArr(){
                if(scope.totalPages<=5){
                    for(var i=1;i<=5;i++){
                        scope.pageArr.push(i);
                    }
                }
                if(scope.totalPages>5&&scope.currentPage<=4){
                    scope.pageArr=[1,2,3,4,5,'…',scope.totalPages];
                }
                if(scope.totalPages>5&&scope.currentPage>4&&scope.currentPage<scope.totalPages-3){
                    scope.pageArr=[1,'…',scope.currentPage-1,scope.currentPage,scope.currentPage+1,'…',scope.totalPages];
                }
                if(scope.totalPages>5&&scope.currentPage>=scope.totalPages-3){
                    scope.pageArr=[1,'…',scope.totalPages-4,scope.totalPages-3,scope.totalPages-2,scope.totalPages-1,scope.totalPages];
                }
            }

            //点击切换分页
            scope.changePage=function(num){
                scope.currentPage=num;
                scope.getInfo(scope.currentPage);
                setPagesArr();
            };
            //点击上一页
            scope.changePrev=function(){
                if(scope.currentPage<=1){
                    return;
                }
                scope.currentPage--;
                scope.getInfo(scope.currentPage);
                setPagesArr();
            };
            //点击下一页
            scope.changeNext=function(){
                if(scope.currentPage>=scope.totalPages){
                    return;
                }
                scope.currentPage++;
                scope.getInfo(scope.currentPage);
                setPagesArr();
            };
            //输入页数切换
            scope.selectPages=function(){
                scope.pages=parseInt(scope.pages);
                if(isNaN(scope.pages)){
                    return;
                }
                if(scope.pages<1||scope.pages>scope.totalPages){
                    return;
                }
                if(scope.pages==scope.currentPage){
                    return;
                }
                scope.currentPage=scope.pages;
                scope.pages='';
                scope.getInfo(scope.currentPage);
                setPagesArr();
            }
        }
    }
});