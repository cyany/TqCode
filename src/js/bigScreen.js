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
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
    {
        name:'里程',
        type:'line',
        stack: '总量',
        data:[150,250,180,465,423,156,120,420],
        itemStyle:{
            normal:{
                lineStyle:{
                    color:'#2f8fbf'
                }
            }
        }, 
        areaStyle:{
            normal:{
                color:'#215e9f'
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
                color:'#215e9f'
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
                color:'#215e9f'
            }
        }
    }
    ]
};

var Today = new Date().toLocaleDateString().replace(/\//g,"-");
    // $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getCarStatistic?statistic_type=week",
    //     function(data){
    //         console.log(data);
    //         var newArrX = [],newArrY=[];
    //         $.each(data.data,function(index,item){
    //             newArrX.push(item.statistic_date);
    //             newArrY.push((item.distance/1000).toFixed(2));
    //         });
    //         console.log(newArrX,newArrY,123456)
    //         line1.xAxis.data= newArrX;
    //         line1.series[0].data= newArrY;
    //     })

    // $("#carWeek").click(function(){
    //      $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getCarStatistic?statistic_type=month",
    //         function(data){
    //           var newArrX = [],newArrY=[];
    //             $.each(data.data,function(index,item){
    //                 newArrX.push(item.statistic_date);
    //                 newArrY.push((item.distance/1000).toFixed(2));
    //             })
    //             console.log(newArrX,newArrY,123456)
    //             line1.xAxis.data= newArrX;
    //             line1.series[0].data= newArrY;
    //         })
    // })
    // $("#carMonth").click(function(){
    //      $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getCarStatistic?statistic_type=month",
    //         function(data){
    //             console.log(data);
    //             line1 = data.data;
    //         })
    // });

    var rader = {
        title: {
            text: '保障数量',
            textStyle:{
             color:'#fff'
         }
     },
     tooltip: {
        trigger: 'axis' ,
        color:'#ff0',
    },
    textStyle:{
     color:'#fff'
 },
 color:['#215e9f'],
 radar: [
 {
    indicator: [
    {text: '天河区', max: 100},
    {text: '海珠区', max: 100},
    {text: '白云区', max: 100},
    {text: '荔湾区', max: 100},
    {text: '越秀区', max: 100},
    {text: '黄埔区', max: 100}
    ],
    center: ['45%','50%'],
    radius: 60,
    splitArea : {
        show : true,   
        areaStyle : {
                                color: ["#030d3e"]  // 图表背景网格的颜色
                            }
                        },
                        splitLine : {
                            show : true,
                            lineStyle : {
                                width : 1,
                                color : '#286fbb' // 图表背景网格线的颜色
                            }
                        }
                    },

                    ],
                    series: [
                    {
                        type: 'radar',
                        tooltip: {
                            trigger: 'item'
                        },
                        itemStyle: {normal: {areaStyle: {type: 'default',color:'#223a72'},lineStyle:{
                            color:'#5df2f8',
                            width:'0.5'
                        }}},
                        data: [
                        {
                            value: [60,73,85,40,90,50],
                            name: '保障数量'
                        }
                        ]
                    }

                    ]
                };

                var rader2 ={
                    title: {
                        text: '报障类型',
                        textStyle:{
                            color:'#fff'
                        }
                    },
                    tooltip: {
                        trigger: 'axis' ,
                        color:'#ff0',
                    },
                    textStyle:{
                        color:'#fff'
                    },
                    color:['#215e9f'],
                    radar: [
                    {
                        indicator: [
                        {text: '其它障碍', max: 100},
                        {text: '外挂异物', max: 100},
                        {text: '灯具不亮', max: 100},
                        {text: '灯杆倾斜', max: 100},
                        {text: '灯杆损坏', max: 100},
                        {text: '电线损坏', max: 100},
                        {text: '绿化遮挡', max: 100}
                        ],
                        center: ['45%','50%'],
                        radius: 60,
                        splitArea : {
                            show : true,   
                            areaStyle : {
                                color: ["#030d3e"]  // 图表背景网格的颜色
                            }
                        },
                        splitLine : {
                            show : true,
                            lineStyle : {
                                width : 1,
                                color : '#286fbb' // 图表背景网格线的颜色
                            }
                        }
                    },

                    ],
                    series: [
                    {
                        type: 'radar',
                        tooltip: {
                            trigger: 'item'
                        },
                        itemStyle: {normal: {areaStyle: {type: 'default',color:'#223a72'},lineStyle:{
                            color:'#5df2f8',
                            width:'0.5'
                        }}},
                        data: [
                        {
                            value: [60,73,85,40,90,50,60],
                            name: '报障类型'
                        }
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
                        color:["#0180c7","#2a448f"]
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
                        color:["#0180c7","#2a448f"]

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
                        color:["#0180c7","#2a448f"]

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
                                color:'#215e9f'
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
                                color:'#215e9f'
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
                                color:'#215e9f'
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

                var lineMiddle ={
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
                        data: ['周一','周二','周三','周四','周五','周六','周日'],
                        splitLine:{
                            　　show:false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        splitLine:{
                            　　show:false
                        }
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
                                color:'#215e9f'
                            }
                        }
                    }
                    ]
                };

                var barMiddle ={
                    color: ['#3398DB'],
                    textStyle:{
                        color:'#fff'
                    },
                    tooltip : {
                        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
    {
        type : 'category',
        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    }
    ],
    yAxis : [
    {
        type : 'value'
    }
    ],
    series : [
    {
        name:'直接访问',
        type:'bar',
        barWidth: '60%',
        data:[10, 52, 200, 334, 390, 330, 220]
    }
    ]
};





// $("#raderThreeMonth").click(function(){
//     raderFun('threemonth');
// })

var allData ={
    	echart:function(id,options){
    		echarts.init(document.getElementById(id)).setOption(options);
            echarts.init(document.getElementById(id)).resize();
            setInterval(function(){
                echarts.init(document.getElementById(id)).resize();
            },3000)
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
            this.echart('rightLine1',rightLine1);
            this.echart('rightLine2',rightLine2);
            this.echart('rightLine3',rightLine3);
            this.echart('rightBar',rightBar);
            this.echart('line-middle',lineMiddle);
            this.echart('bar-middle',barMiddle);
        },
        tab:function(id){
            var that = this;
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
        allData.tab('#middle-middle');
        allData.init();
        // allData.carousel2(); 
        // allData.wheel('rightTable');
        allData.wheel('leftTable');
        setInterval(function(){
            $("#header p").text(utils.getToday());
        },1000)




raderFun('day');
function raderFun(time){
    if(time=="day"){
        var dataInfo = {
            "statistic_type":'day',
            "date":utils.getToday()
        }
    }else if(time=="week"){
        var dataInfo = {
            "statistic_type":'week'
        }
    }else if(time=="month"){
        var dataInfo = {
            "statistic_type":'month'
        }
    }
    $.ajax({
        url:'http://192.168.1.117:8080//jehc-web/oaInspectioncloudStatisticController/getLightBelongDistrictStatistics',
        data:dataInfo,
        success:function(data){
            console.log(data);
            var itemName=[],itemValue=[],itemfinal=[];
            $.each(JSON.parse(data),function(index,item){
                itemName.push(item.name);
                itemValue.push(item.light_count);
            })
            var maxValue=itemValue[0];
            $.each(itemValue,function(index,item){
                if(itemValue[index+1]>itemValue[index]){
                    maxValue=itemValue[index+1];
                }
            });
            console.log(itemValue);
            $.each(itemName,function(index,item){
                itemfinal.push({text:item,max:maxValue});
            })
            console.log(itemfinal);
            rader.radar[0]["indicator"]=itemfinal;
            rader.series[0].data[0].value= itemValue;

            allData.echart('rader',rader);
        }
    });
}
raderFun1('day');
function raderFun1(time){
    if(time=="day"){
        var dataInfo = {
            "statistic_type":'day',
            "date":utils.getToday()
        }
    }else if(time=="week"){
        var dataInfo = {
            "statistic_type":'week'
        }
    }else if(time=="month"){
        var dataInfo = {
            "statistic_type":'month'
        }
    }
    $.ajax({
        url:'http://192.168.1.117:8080//jehc-web/oaInspectioncloudStatisticController/getLightFaultTypeStatistics',
        data:dataInfo,
        success:function(data){
            console.log(data);
            var itemName=[],itemValue=[],itemfinal=[];
            $.each(JSON.parse(data),function(index,item){
                itemName.push(item.name);
                itemValue.push(item.light_count);
            })
            var maxValue=itemValue[0];
            $.each(itemValue,function(index,item){
                if(itemValue[index+1]>itemValue[index]){
                    maxValue=itemValue[index+1];
                }
            });
            console.log(itemValue)
            $.each(itemName,function(index,item){
                itemfinal.push({text:item,max:maxValue});
            })
            console.log(itemfinal);
            rader2.radar[0]["indicator"]=itemfinal;
            rader2.series[0].data[0].value= itemValue;

            allData.echart('rader2',rader2);
        }
    });
}

$("#raderWeek").click(function(){
    raderFun('week');
    raderFun1('week');
    allData.echart('rader',rader);
    allData.echart('rader2',rader2);
})
$("#raderMonth").click(function(){
    raderFun('month');
    raderFun1('month');
    allData.echart('rader',rader);
    allData.echart('rader2',rader2);
});


function lineMiddleFun(time){
    var allDatainner ='';
    var finalArrCount=[],firstArrName=[];
    if(time=="week"){
        var dataInfo={
            statistic_type:'week'
        }

        $.ajax({
            url:'http://192.168.1.117:8080//jehc-web/oaInspectioncloudStatisticController/getLightDayDeclareStatistics',
            data:dataInfo,
            success:function(data){
                console.log(data,789);
                allDatainner= JSON.parse(data);
                var todayTime = new Date(new Date().toLocaleDateString()).getTime();
                var tempTime;

                for(var i=0;i<7;i++){
                    i++;
                    $.each(allDatainner,function(index,item){
                        tempTime = new Date(todayTime).toLocaleDateString().replace(/\//g,"-");
                        console.log(tempTime,123456)
                        if(tempTime==item["name"]){
                            finalArrCount.push(item["light_count"]);
                            firstArrName.push(tempTime);
                        }else{
                            finalArrCount.push(0);
                            firstArrName.push(tempTime);
                        }
                        todayTime =(new Date(tempTime).getTime()-3600*1000*24);
                    })
                }
                console.log(firstArrName,finalArrCount)
                lineMiddle.xAxis.data=firstArrName;
                lineMiddle.series[0].data= finalArrCount;
                console.log(lineMiddle.xAxis.data,lineMiddle.series[0].data)
                allData.echart('line-middle',lineMiddle);
                console.log(allData,77777)
            }
        })
        

    }else if(time=="month"){
        var dataInfo={
            statistic_type:'month'
        }

        $.ajax({
            url:'http://192.168.1.117:8080//jehc-web/oaInspectioncloudStatisticController/getLightDayDeclareStatistics',
            data:dataInfo,
            success:function(data){
                console.log(data,789);
                allData= JSON.parse(data);
                var todayTime = new Date(new Date().toLocaleDateString()).getTime();
                var tempTime;
                var finalArr=[];
                for(var i=0;i<30;i++){
                    i++;
                    $.each(allData,function(index,item){
                        tempTime = new Date(todayTime).toLocaleDateString().replace(/\//g,"-");
                        console.log(tempTime,123456)
                        if(tempTime==item["name"]){
                           finalArr.push({light_count:item["light_count"],name:tempTime});
                       }else{
                        console.log(finalArr,456789);
                        finalArr.push({"light_count":0,name:tempTime});
                    }
                    todayTime =(new Date(tempTime).getTime()-3600*1000*24);
                })
                }
            }
        })
    }else if(time=="threemonth"){

    }
   
}
lineMiddleFun('week');

}