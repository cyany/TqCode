import "./../css/bigScreen.css";
// import "./../css/bigScreen.scss";
import utils from "./utils.js";

console.log(123);
var line1 = {
    title: {
        text: '里程(km)',
        textStyle:{
            color:'#fff'
        }
    },
    textStyle:{
            color:'#fff'
        },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'里程',
            type:'line',
            stack: '总量',
            data:[],
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#2f8fbf'
                    }
                }
            }, 
            areaStyle:{
                normal:{
                    color:'#5E9DBF'
                }
            }
        }
    ]
};
var line2 = {
    title: {
        text: 'title',
        textStyle:{
            color:'#fff'
        }
    },
    textStyle:{
            color:'#fff'
        },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410],
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#2f8fbf'
                    }
                }
            }, 
            areaStyle:{
                normal:{
                    color:'#5E9DBF'
                }
            }
        }
    ]
};
var line3 = {
    title: {
        text: 'title',
        textStyle:{
            color:'#fff'
        }
    },
    textStyle:{
            color:'#fff'
        },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410],
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#2f8fbf'
                    }
                }
            }, 
            areaStyle:{
                normal:{
                    color:'#5E9DBF'
                }
            }
        }
    ]
};

    var Today = new Date().toLocaleDateString().replace(/\//g,"-");
    $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getCarStatistic?statistic_type=week",
        function(data){
            console.log(data);
            var newArrX = [],newArrY=[];
            $.each(data.data,function(index,item){
                newArrX.push(item.statistic_date);
                newArrY.push((item.distance/1000).toFixed(2));
            });
            console.log(newArrX,newArrY,123456)
            line1.xAxis.data= newArrX;
            line1.series[0].data= newArrY;
        })

    $("#carWeek").click(function(){
         $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getCarStatistic?statistic_type=month",
            function(data){
              var newArrX = [],newArrY=[];
                $.each(data.data,function(index,item){
                    newArrX.push(item.statistic_date);
                    newArrY.push((item.distance/1000).toFixed(2));
                })
                console.log(newArrX,newArrY,123456)
                line1.xAxis.data= newArrX;
                line1.series[0].data= newArrY;
            })
    })
    $("#carMonth").click(function(){
         $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getCarStatistic?statistic_type=month",
            function(data){
                console.log(data);
                line1 = data.data;
            })
    });

var rader = {
    title: {
        text: 'title',
        textStyle:{
        	color:'#fff'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    textStyle:{
        	color:'#fff'
        },
    legend: {
        x: 'center',
        data:['某软件'],
        textStyle:{
        	color:'#fff'
        }
    },
    radar: [
        {
            indicator: [
                {text: 'A', max: 100},
                {text: 'B', max: 100},
                {text: 'C', max: 100},
                {text: 'D', max: 100},
                {text: 'E', max: 100}
            ],
            center: ['45%','50%'],
            radius: 60
        },
        
    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default',color:'#5E9DBF'},lineStyle:{
                color:'#2f8fbf'
            }}},
            data: [
                {
                    value: [60,73,85,40,90],
                    name: '某软件'
                }
            ]
        }
        
    ]
};

var rader2 = {
    title: {
        text: 'title',
        textStyle:{
        	color:'#fff'
        }
    },
    textStyle:{
        	color:'#fff'
        },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'center',
        data:['某软件'],
        textStyle:{
        	color:'#fff'
        }
    },
    radar: [
        {
            indicator: [
                {text: 'A', max: 100},
                {text: 'B', max: 100},
                {text: 'C', max: 100},
                {text: 'D', max: 100},
                {text: 'E', max: 100}
            ],
            center:  ['45%','50%'],
            radius: 60
        },
        
    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
              itemStyle: {normal: {areaStyle: {type: 'default',color:'#5E9DBF'},lineStyle:{
                color:'#2f8fbf'
            }}},
            data: [
                {
                    value: [60,73,85,40,90],
                    name: '某软件'
                }
            ]
        }
        
    ]
};

var mdc1 ={
    tooltip: {
        trigger: 'item',
        formatter: "{a} "
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问'],
        textStyle:{
            color:'#fff'
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'}
            ]
        }
    ]
};
var mdc2 ={
    tooltip: {
        trigger: 'item',
        formatter: "{a} "
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问'],
        textStyle:{
            color:'#fff'
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'}
            ]
        }
    ]
};
var mdc3 ={
    tooltip: {
        trigger: 'item',
        formatter: "{a} "
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问'],
        textStyle:{
            color:'#fff'
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'}
            ]
        }
    ]
};
var mdc4 ={
    tooltip: {
        trigger: 'item',
        formatter: "{a} "
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问'],
        textStyle:{
            color:'#fff'
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'}
            ]
        }
    ]
};
var circle1 = {
    series: [
        {
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'bold'
                    }
                }
            },
            data:[
                {value:335, name:'10%'},
                {value:310, name:''}
            ],
            color:["#0180c7","#294696"]

        }
    ]
};

var circle2 = {
    series: [
        {
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'bold'
                    }
                }
            },
            data:[
                {value:335, name:'10%'},
                {value:310, name:''}
            ],
            color:["#0180c7","#294696"]

        }
    ]
};

var circle3 = {
    series: [
        {
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'bold'
                    }
                }
            },
            data:[
                {value:335, name:'10%'},
                {value:310, name:''}
            ],
            color:["#0180c7","#294696"]

        }
    ]
};
var rightLine1 =  {
    title: {
        text: 'title',
        textStyle:{
            color:'#fff'
        }
    },
    textStyle:{
            color:'#fff'
        },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410],
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#2f8fbf'
                    }
                }
            }, 
            areaStyle:{
                normal:{
                    color:'#5E9DBF'
                }
            }
        }
    ]
};
var rightLine2 =  {
    title: {
        text: 'title',
        textStyle:{
            color:'#fff'
        }
    },
    textStyle:{
            color:'#fff'
        },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410],
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#2f8fbf'
                    }
                }
            }, 
            areaStyle:{
                normal:{
                    color:'#5E9DBF'
                }
            }
        }
    ]
};
var rightLine3 = {
    title: {
        text: 'title',
        textStyle:{
            color:'#fff'
        }
    },
    textStyle:{
            color:'#fff'
        },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410],
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#2f8fbf'
                    }
                }
            }, 
            areaStyle:{
                normal:{
                    color:'#5E9DBF'
                }
            }
        }
    ]
};
var rightBar = {
    title: {
        text: '世界人口总量',
        textStyle:{
            color:'#fff'
        }
    },
    textStyle:{
            color:'#fff'
        },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年','2013'],
        textStyle:{
            color:'#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
    },
    itemStyle:{
        normal:{
            
        }
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        },
        {
            name: '2013',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};


var allData ={
	echart:function(id,options){
		echarts.init(document.getElementById(id)).setOption(options);
        echarts.init(document.getElementById(id)).resize();
	},
    carousel:function(){
        var cardWrapWidth = $('#middle-middle').width();
        // console.log(cardWrapWidth)
        $(".personCard").width($(".personCard li").length*100+"%");
        $(".personCard li").width((100/$(".personCard li").length)+"%");
        var flag=0;
        $(".arrow-right").click(function(){
            flag++;
            if(flag>=$(".personCard li").length){
                flag=0;
            }
            $(".personCard").css({
                "transform":'translateX(-'+cardWrapWidth*flag+'px)',
                "transition":'all 1s'
            })
        });
        $(".arrow-left").click(function(){
            flag--;
            if(flag<0){
                flag=$(".personCard li").length-1;
            }
            $(".personCard").css({
                "transform":'translateX(-'+cardWrapWidth*flag+'px)',
                "transition":'all 1s'
            })
        });
    },
    carousel2:function(){
        var barWrapWidth = $('.barWrap').width();
        var middleBarData="";
        function dealWidth(){
            $(".barWrap ul").html("");
            $.each(middleBarData,function(index,item){
                if(item["first_sum"]=="0"){
                    $(".barWrap ul").append("<li><span>0.00%</span> <div style='height:0px'></div> <span title="+item["name"]+"(未分配)>"+item["name"]+"(未分配)"+"</span></li>")  

                }else{
                    var detailNum =(Number(item["first_count"])*100/Number(item["first_sum"])).toFixed(2);
                    console.log(detailNum)
                    $(".barWrap ul").append("<li><span>"+detailNum+"%</span> <div style='height:"+(detailNum/100)*250+"px'></div> <span title="+item["name"]+">"+item.name+"</span></li>")  
                }
            });

            $(".barWrap ul").width($(".barWrap li").length*100+"%");
            $(".barWrap li").width((100/15/$(".barWrap li").length)+"%");
            var flag=0,step=0;
            $(".arrowbar-right").click(function(){
                flag+=100;
                step++;
                if(step>=parseInt($(".barWrap").width()/($('.barWrap li').width()+30))-5){
                    flag=0;
                    step=0;
                }
                $(".barWrap ul").css({
                    "transform":'translateX(-'+flag+'px)',
                    "transition":'all 1s'
                })
            });
            $(".arrowbar-left").click(function(){
                flag-=100;
                step--;
                if(step<0){
                    flag=0;
                    step =0
                }
                $(".barWrap ul").css({
                    "transform":'translateX(-'+flag+'px)',
                    "transition":'all 1s'
                })
            });
        }
        var Today = new Date().toLocaleDateString().replace(/\//g,"-");
        $('#routeTime').val(Today);
        $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getRoutingsStatistic?statistic_type=day&date="+Today,
            function(data){
                console.log(data);
                middleBarData = data.data;
            }).then(function(){
                console.log(middleBarData)
                dealWidth();
            });
        $('#routeTime').change(function(){
            $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getRoutingsStatistic?statistic_type=day&date="+$('#routeTime').val(),
            function(data){
                console.log(data);
                middleBarData = data.data;
            }).then(function(){
                console.log(middleBarData)
                dealWidth();
            });
        });
        $("#routeWeek").click(function(){
            $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getRoutingsStatistic?statistic_type=week",
            function(data){
                console.log(data);
                middleBarData = data.data;
            }).then(function(){
                console.log(middleBarData)
                dealWidth();
            });
        });
        $("#routeMonth").click(function(){
            $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getRoutingsStatistic?statistic_type=month",
            function(data){
                console.log(data);
                middleBarData = data.data;
            }).then(function(){
                console.log(middleBarData)
                dealWidth();
            });
        });  
    },
    init:function(){
        this.echart('line1',line1);
        this.echart('line2',line2);
        this.echart('line3',line3);
        this.echart('rader',rader);
        this.echart('rader2',rader2);
        this.echart('circle1',circle1);
        this.echart('circle2',circle2);
        this.echart('circle3',circle3);
        this.echart('mdc1',mdc1);
        this.echart('mdc2',mdc2);
        this.echart('mdc3',mdc3);
        this.echart('mdc4',mdc4);
        this.echart('rightLine1',rightLine1);
        this.echart('rightLine2',rightLine2);
        this.echart('rightLine3',rightLine3);
        this.echart('rightBar',rightBar);
    },
    tab:function(id){
        var that = this;
        console.log(123456)
        $(id).find(".tabNav li").each(function(index,item){
            $(item).click(function(){
                $(id).find(".tabContent li").hide().eq(index).show();
                that.init();
            })
        });
    },
    wheel:function(id){
        var flag =0;
        var trDom = document.getElementById(id).children[0].children;
        document.getElementById(id).children[0].style.transition="transform 1s";
        document.getElementById(id).onmousewheel=function(e){
            if(e.wheelDeltaY<0){
                flag+=10;
                if(flag<(trDom.length-1)*trDom[0].offsetHeight){
                    document.getElementById(id).children[0].style.transform="translateY(-"+flag+"px)";  
                }else{
                    flag=(trDom.length-1)*trDom[0].offsetHeight
                }
            }
            
            if(e.wheelDeltaY>0){
                flag-=10;
                if(flag>0 && flag <(trDom.length-1)*trDom[0].offsetHeight){
                    document.getElementById(id).children[0].style.transform="translateY(-"+flag+"px)";
                }else{
                    flag= 0;
                    document.getElementById(id).children[0].style.transform="translateY(0)";
                }
            }
        }

    },
}
window.onload=function(){
    allData.tab('#tab1');
    allData.tab('#tab2');
    allData.tab('#tab-bar-line');
    allData.init();
    // allData.carousel2(); 
    // allData.wheel('rightTable');
    allData.wheel('leftTable');
    allData.carousel();  
}
