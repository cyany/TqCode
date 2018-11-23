import "./../css/bigScreen.css";
// import "./../css/bigScreen.scss";
import utils from "./utils.js";

console.log(123);
var line1 = {
    title: {
        text: '里程(km)',
        textStyle: {
            color: '#fff'
        }
    },
    textStyle: {
        color: '#fff'
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
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '里程',
        type: 'line',
        stack: '总量',
        data: [150, 250, 180, 465, 423, 156, 120, 420],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#2f8fbf'
                }
            }
        },
        areaStyle: {
            normal: {
                color: '#215e9f'
            }
        }
    }]
};
var line2 = {
    title: {
        text: 'title',
        textStyle: {
            color: '#fff'
        }
    },
    textStyle: {
        color: '#fff'
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
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#2f8fbf'
                }
            }
        },
        areaStyle: {
            normal: {
                color: '#215e9f'
            }
        }
    }]
};
var line3 = {
    title: {
        text: 'title',
        textStyle: {
            color: '#fff'
        }
    },
    textStyle: {
        color: '#fff'
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
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#2f8fbf'
                }
            }
        },
        areaStyle: {
            normal: {
                color: '#215e9f'
            }
        }
    }]
};



var rader = {
    title: {
        text: '保障数量',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        color: '#ff0',
    },
    textStyle: {
        color: '#fff'
    },
    color: ['#215e9f'],
    radar: [{
        indicator: [{
            text: '天河区',
            max: 100
        },
        {
            text: '海珠区',
            max: 100
        },
        {
            text: '白云区',
            max: 100
        },
        {
            text: '荔湾区',
            max: 100
        },
        {
            text: '越秀区',
            max: 100
        },
        {
            text: '黄埔区',
            max: 100
        }],
        center: ['45%', '50%'],
        radius: 60,
        splitArea: {
            show: true,
            areaStyle: {
                color: ["#030d3e"] // 图表背景网格的颜色
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: '#286fbb' // 图表背景网格线的颜色
            }
        }
    },

    ],
    series: [{
        type: 'radar',
        tooltip: {
            trigger: 'item'
        },
        itemStyle: {
            normal: {
                areaStyle: {
                    type: 'default',
                    color: '#223a72'
                },
                lineStyle: {
                    color: '#5df2f8',
                    width: '0.5'
                }
            }
        },
        data: [{
            value: [60, 73, 85, 40, 90, 50],
            name: '保障数量'
        }]
    }

    ]
};

var rader2 = {
    title: {
        text: '报障类型',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        color: '#ff0',
    },
    textStyle: {
        color: '#fff'
    },
    color: ['#215e9f'],
    radar: [{
        indicator: [{
            text: '其它障碍',
            max: 100
        },
        {
            text: '外挂异物',
            max: 100
        },
        {
            text: '灯具不亮',
            max: 100
        },
        {
            text: '灯杆倾斜',
            max: 100
        },
        {
            text: '灯杆损坏',
            max: 100
        },
        {
            text: '电线损坏',
            max: 100
        },
        {
            text: '绿化遮挡',
            max: 100
        }],
        center: ['45%', '50%'],
        radius: 60,
        splitArea: {
            show: true,
            areaStyle: {
                color: ["#030d3e"] // 图表背景网格的颜色
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: '#286fbb' // 图表背景网格线的颜色
            }
        }
    },

    ],
    series: [{
        type: 'radar',
        tooltip: {
            trigger: 'item'
        },
        itemStyle: {
            normal: {
                areaStyle: {
                    type: 'default',
                    color: '#223a72'
                },
                lineStyle: {
                    color: '#5df2f8',
                    width: '0.5'
                }
            }
        },
        data: [{
            value: [60, 73, 85, 40, 90, 50, 60],
            name: '报障类型'
        }]
    }

    ]
};

var circle1 = {
    series: [{
        type: 'pie',
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
        data: [{
            value: 335,
            name: '10%'
        },
        {
            value: 310,
            name: ''
        }],
        color: ["#0180c7", "#2a448f"]
    }]
};

var circle2 = {
    series: [{
        type: 'pie',
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
        data: [{
            value: 335,
            name: '10%'
        },
        {
            value: 310,
            name: ''
        }],
        color: ["#0180c7", "#2a448f"]

    }]
};

var circle3 = {
    series: [{
        type: 'pie',
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
        data: [{
            value: 335,
            name: '10%'
        },
        {
            value: 310,
            name: ''
        }],
        color: ["#0180c7", "#2a448f"]

    }]
};
var rightLine1 = {
    title: {
        text: 'title',
        textStyle: {
            color: '#fff'
        }
    },
    textStyle: {
        color: '#fff'
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
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#2f8fbf'
                }
            }
        },
        areaStyle: {
            normal: {
                color: '#215e9f'
            }
        }
    }]
};
var rightLine2 = {
    title: {
        text: 'title',
        textStyle: {
            color: '#fff'
        }
    },
    textStyle: {
        color: '#fff'
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
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#2f8fbf'
                }
            }
        },
        areaStyle: {
            normal: {
                color: '#215e9f'
            }
        }
    }]
};
var rightLine3 = {
    title: {
        text: 'title',
        textStyle: {
            color: '#fff'
        }
    },
    textStyle: {
        color: '#fff'
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
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#2f8fbf'
                }
            }
        },
        areaStyle: {
            normal: {
                color: '#215e9f'
            }
        }
    }]
};
var rightBar = {
    title: {
        text: '维修情况',
        textStyle: {
            color: '#fff'
        }
    },
    textStyle: {
        color: '#fff'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['已申报', '已派单', '已维修'],
        textStyle: {
            color: '#fff'
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
        data: ['其他故障', '外挂异物', '灯具不亮', '灯杆倾斜', '灯杆损坏','电线裸露']
    },
    series: [{
        name: '已申报',
        type: 'bar',
        data: [0, 0, 0, 0, 0, 0]
    },
    {
        name: '已派单',
        type: 'bar',
        data: [0, 0, 0, 0, 0, 0]
    },
    {
        name: '已维修',
        type: 'bar',
        data: [0, 0, 0, 0, 0, 0]
    }]
};

var lineMiddle = {
    title: {
        text: '灯况',
        textStyle: {
            color: '#fff'
        }
    },
    textStyle: {
        color: '#fff'
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
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        splitLine: {　　show: false
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {　　show: false
        }
    },
    series: [{
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#2f8fbf'
                }
            }
        },
        areaStyle: {
            normal: {
                color: '#215e9f'
            }
        }
    }]
};

var barMiddle = {
    color: ['#3398DB'],
    textStyle: {
        color: '#fff'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
    }]
};

let eIArr=[];
var allData = {
    echart: function(id, options) {
        var echartInstance = echarts.init(document.getElementById(id));
        eIArr.push(echartInstance);
        echartInstance.setOption(options);
        echartInstance.resize();
        // setTimeout(function() {
        //     echarts.init(document.getElementById('line-middle')).resize();
        // },
        // 3000)
    },
    carousel: function() {
        var cardWrapWidth = $('#middle-middle').width();
        $(".personCard").width($(".personCard li").length * 100 + "%");
        $(".personCard li").width((100 / $(".personCard li").length) + "%");
        var flag = 0;
        $(".arrow-right").click(function() {
            flag++;
            if (flag >= $(".personCard li").length) {
                flag = 0;
            }
            $(".personCard").css({
                "transform": 'translateX(-' + cardWrapWidth * flag + 'px)',
                "transition": 'all 1s'
            })
        });
        $(".arrow-left").click(function() {
            flag--;
            if (flag < 0) {
                flag = $(".personCard li").length - 1;
            }
            $(".personCard").css({
                "transform": 'translateX(-' + cardWrapWidth * flag + 'px)',
                "transition": 'all 1s'
            })
        });
    },
    carousel2: function() {
        var barWrapWidth = $('.barWrap').width();
        var middleBarData = "";
        function dealWidth() {
            $(".barWrap ul").html("");
            $.each(middleBarData,
            function(index, item) {
                if (item["first_sum"] == "0") {
                    $(".barWrap ul").append("<li><span>0.00%</span> <div style='height:0px'></div> <span title=" + item["name"] + "(未分配)>" + item["name"] + "(未分配)" + "</span></li>")

                } else {
                    var detailNum = (Number(item["first_count"]) * 100 / Number(item["first_sum"])).toFixed(2);
                    $(".barWrap ul").append("<li><span>" + detailNum + "%</span> <div style='height:" + (detailNum / 100) * 250 + "px'></div> <span title=" + item["name"] + ">" + item.name + "</span></li>")
                }
            });

            $(".barWrap ul").width($(".barWrap li").length * 100 + "%");
            $(".barWrap li").width((100 / 15 / $(".barWrap li").length) + "%");
            var flag = 0,
            step = 0;
            $(".arrowbar-right").click(function() {
                flag += 100;
                step++;
                if (step >= parseInt($(".barWrap").width() / ($('.barWrap li').width() + 30)) - 5) {
                    flag = 0;
                    step = 0;
                }
                $(".barWrap ul").css({
                    "transform": 'translateX(-' + flag + 'px)',
                    "transition": 'all 1s'
                })
            });
            $(".arrowbar-left").click(function() {
                flag -= 100;
                step--;
                if (step < 0) {
                    flag = 0;
                    step = 0
                }
                $(".barWrap ul").css({
                    "transform": 'translateX(-' + flag + 'px)',
                    "transition": 'all 1s'
                })
            });
        }
        var Today = new Date().toLocaleDateString().replace(/\//g, "-");
        $('#routeTime').val(Today);
        $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getRoutingsStatistic?statistic_type=day&date=" + Today,
        function(data) {
            middleBarData = data.data;
        }).then(function() {
            dealWidth();
        });
        $('#routeTime').change(function() {
            $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getRoutingsStatistic?statistic_type=day&date=" + $('#routeTime').val(),
            function(data) {

                middleBarData = data.data;
            }).then(function() {

                dealWidth();
            });
        });
        $("#routeWeek").click(function() {
            $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getRoutingsStatistic?statistic_type=week",
            function(data) {

                middleBarData = data.data;
            }).then(function() {

                dealWidth();
            });
        });
        $("#routeMonth").click(function() {
            $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getRoutingsStatistic?statistic_type=month",
            function(data) {

                middleBarData = data.data;
            }).then(function() {

                dealWidth();
            });
        });
    },
    init: function() {
        this.echart('line1', line1);
        this.echart('line2', line2);
        this.echart('line3', line3);
        this.echart('rader', rader);
        this.echart('rader2', rader2);
        this.echart('circle1', circle1);
        this.echart('circle2', circle2);
        this.echart('circle3', circle3);
        this.echart('rightLine1', rightLine1);
        this.echart('rightLine2', rightLine2);
        this.echart('rightLine3', rightLine3);
        this.echart('rightBar', rightBar);
        this.echart('line-middle', lineMiddle);
        this.echart('bar-middle', barMiddle);
    },
    tab: function(id) {
        var that = this;
        $(id).find(".tabNav li").each(function(index, item) {
            $(item).click(function() {
                $(id).find(".tabContent li").hide().eq(index).show();
                // that.init();
                console.log(eIArr,"eirr");
                var resizeInstance = ['line1','line2','line3','line-middle','bar-middle','rightLine1','rightLine2','rightLine3'];
                $.each(eIArr,function(index,item){
                    // if(item._dom.id =="line2" || item._dom.id=="line3"){
                    //     console.log(this,78945611231202)
                    //     this.resize();
                    // }
                    var _this = this;
                    $.each(resizeInstance,function(index1,item1){
                        if(item._dom.id==item1){
                            _this.resize();
                        }
                    })
                })
            })
        });
    },
    wheel: function(id) {
        var flag = 0;
        var trDom = document.getElementById(id).children[0].children;
        document.getElementById(id).children[0].style.transition = "transform 1s";
        document.getElementById(id).onmousewheel = function(e) {
            if (e.wheelDeltaY < 0) {
                flag += 10;
                if (flag < (trDom.length - 1) * trDom[0].offsetHeight) {
                    document.getElementById(id).children[0].style.transform = "translateY(-" + flag + "px)";
                } else {
                    flag = (trDom.length - 1) * trDom[0].offsetHeight
                }
            }

            if (e.wheelDeltaY > 0) {
                flag -= 10;
                if (flag > 0 && flag < (trDom.length - 1) * trDom[0].offsetHeight) {
                    document.getElementById(id).children[0].style.transform = "translateY(-" + flag + "px)";
                } else {
                    flag = 0;
                    document.getElementById(id).children[0].style.transform = "translateY(0)";
                }
            }
        }

    },
}

window.onload = function() {
    allData.carousel2(); 
    // allData.wheel('rightTable');
    allData.wheel('leftTable');
    setInterval(function() {
        $("#header p").text(utils.getToday());
    },
    1000)
    allData.init();
    allData.tab('#tab1');
    allData.tab('#tab2');
    allData.tab('#middle-middle');


    function leftCarFun(time){
        var Today = new Date().toLocaleDateString().replace(/\//g, "-");
        $.getJSON("http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getCarStatistic?statistic_type="+time,
                function(data){
                    var allDatainner =data.data;
                    if(allDatainner.length>0){
                        var todayTime = new Date(new Date().toLocaleDateString()).getTime();
                        var tempTime;
                        var cirFlag=false;
                        var newArrX = [],newArrY=[];
                        var numloop =100;
                        if(time=="week"){
                            numloop = 7;
                        }else if(time =="month"){
                            numloop = 30;
                        }
                        for (var i = 0; i < numloop; i++) {
                            $.each(allDatainner,
                            function(index, item) {
                                cirFlag =true;
                                tempTime = new Date(todayTime).toLocaleDateString().replace(/\//g, "-");
                                if (tempTime == item["statistic_date"]) {
                                    newArrY.push((item.distance/1000).toFixed(2));
                                    newArrX.push(tempTime);
                                    return false;
                                } else {
                                    cirFlag= false;
                                }
                                
                            })
                            if(!cirFlag){
                                newArrY.push(0);
                                newArrX.push(tempTime);
                            }
                            todayTime = (new Date(tempTime).getTime() - 3600 * 1000 * 24);
                        }
                        line1.xAxis.data= newArrX.reverse();
                        line1.series[0].data= newArrY.reverse();
                        // allData.echart('line1',line1);
                        $.each(eIArr,function(index,item){
                            if(item._dom.id=="line1"){
                                this.setOption(line1);
                                this.resize();
                                return false;
                            }
                        });
                    }
                })
    }
    leftCarFun('month');
    $("#carWeek").click(function(){
        leftCarFun("week");
    })
    $("#carMonth").click(function(){
         leftCarFun("month");
    });

    raderFun();
    function raderFun(time) {
        if (time == "day") {
            var dataInfo = {
                "statistic_type": 'day',
                "date": utils.getToday()
            }
        } else if (time == "week") {
            var dataInfo = {
                "statistic_type": 'week'
            }
        } else if (time == "month") {
            var dataInfo = {
                "statistic_type": 'month'
            }
        }else{
            var dataInfo = {
                
            } 
        }
        $.ajax({
            url: 'http://192.168.1.117:8080//jehc-web/oaInspectioncloudStatisticController/getLightBelongDistrictStatistics',
            data: dataInfo,
            success: function(data) {

                var itemName = [],
                itemValue = [],
                itemfinal = [];
                $.each(JSON.parse(data),
                function(index, item) {
                    itemName.push(item.name);
                    itemValue.push(item.light_count);
                }) 
                var maxValue = itemValue[0];
                $.each(itemValue,
                function(index, item) {
                    if (itemValue[index] >= maxValue) {
                        maxValue = itemValue[index];
                    }
                });
                $.each(itemName,
                function(index, item) {
                    itemfinal.push({
                        text: item,
                        max: maxValue
                    });
                })

                rader.radar[0]["indicator"] = itemfinal;
                rader.series[0].data[0].value = itemValue;

                allData.echart('rader', rader);
            }
        });
    }
    raderFun1();
    function raderFun1(time) {
        if (time == "day") {
            var dataInfo = {
                "statistic_type": 'day',
                "date": utils.getToday()
            }
        } else if (time == "week") {
            var dataInfo = {
                "statistic_type": 'week'
            }
        } else if (time == "month") {
            var dataInfo = {
                "statistic_type": 'month'
            }
        }else{
            var dataInfo = {
                
            }
        }
        $.ajax({
            url: 'http://192.168.1.117:8080//jehc-web/oaInspectioncloudStatisticController/getLightFaultTypeStatistics',
            data: dataInfo,
            success: function(data) {

                var itemName = [],
                itemValue = [],
                itemfinal = [];
                $.each(JSON.parse(data),
                function(index, item) {
                    itemName.push(item.name);
                    itemValue.push(item.light_count);
                })
                var maxValue = itemValue[0];
                $.each(itemValue,
                function(index, item) {
                    if (itemValue[index] >= maxValue) {
                        maxValue = itemValue[index];
                    }
                });
                $.each(itemName,
                function(index, item) {
                    itemfinal.push({
                        text: item,
                        max: maxValue
                    });
                })

                rader2.radar[0]["indicator"] = itemfinal;
                rader2.series[0].data[0].value = itemValue;

                allData.echart('rader2', rader2);
            }
        });
    }
    $("#raderWeek").click(function() {
        raderFun('week');
        raderFun1('week');
        allData.echart('rader', rader);
        allData.echart('rader2', rader2);
    }) 
    $("#raderMonth").click(function() {
        raderFun('month');
        raderFun1('month');
        allData.echart('rader', rader);
        allData.echart('rader2', rader2);
    });
    $("#raderThreeMonth").click(function(){
        raderFun('raderThreeMonth');
        raderFun1('raderThreeMonth');
        allData.echart('rader', rader);
        allData.echart('rader2', rader2);
    })

    function lineMiddleFun(time) {
        var allDatainner = '';
        var finalArrCount = [],
        firstArrName = [];
        if (time == "week") {
            var dataInfo = {
                statistic_type: 'week'
            }

            $.ajax({
                url: 'http://192.168.1.117:8080//jehc-web/oaInspectioncloudStatisticController/getLightDayDeclareStatistics',
                data: dataInfo,
                success: function(data) {

                    allDatainner = JSON.parse(data);
                    var todayTime = new Date(new Date().toLocaleDateString()).getTime();
                    var tempTime;
                    var cirFlag=false;

                    for (var i = 0; i < 7; i++) {
                        $.each(allDatainner,
                        function(index, item) {
                            cirFlag =true;
                            tempTime = new Date(todayTime).toLocaleDateString().replace(/\//g, "-");
                            if (tempTime == item["name"]) {
                                finalArrCount.push(item["light_count"]);
                                firstArrName.push(tempTime);
                                return false;
                            } else {
                                cirFlag= false;
                            }
                            
                        })
                        if(!cirFlag){
                            finalArrCount.push(0);
                            firstArrName.push(tempTime);
                        }
                        todayTime = (new Date(tempTime).getTime() - 3600 * 1000 * 24);
                    }
                    lineMiddle.xAxis.data = firstArrName.reverse();
                    lineMiddle.series[0].data = finalArrCount.reverse();
                    allData.echart('line-middle', lineMiddle);
                }
            })

        } else if (time == "month") {
            var dataInfo = {
                statistic_type: 'month'
            }

            $.ajax({
                url: 'http://192.168.1.117:8080//jehc-web/oaInspectioncloudStatisticController/getLightDayDeclareStatistics',
                data: dataInfo,
                success: function(data) {

                    allDatainner = JSON.parse(data);
                    var todayTime = new Date(new Date().toLocaleDateString()).getTime();
                    var tempTime;
                    var cirFlag=false;

                    for (var i = 0; i < 30; i++) {
                        $.each(allDatainner,
                        function(index, item) {
                            cirFlag =true;
                            tempTime = new Date(todayTime).toLocaleDateString().replace(/\//g, "-");
                            if (tempTime == item["name"]) {
                                finalArrCount.push(item["light_count"]);
                                firstArrName.push(tempTime);
                                return false;
                            } else {
                                cirFlag= false;
                            }
                            
                        })
                        if(!cirFlag){
                            finalArrCount.push(0);
                            firstArrName.push(tempTime);
                        }
                        todayTime = (new Date(tempTime).getTime() - 3600 * 1000 * 24);
                    }
                    lineMiddle.xAxis.data = firstArrName.reverse();
                    lineMiddle.series[0].data = finalArrCount.reverse();
                    allData.echart('line-middle', lineMiddle);
                }
            })
        } else if (time == "threemonth") {
            $.ajax({
                            url: 'http://192.168.1.117:8080//jehc-web/oaInspectioncloudStatisticController/getLightDayDeclareStatistics',
                            data: dataInfo,
                            success: function(data) {

                                allDatainner = JSON.parse(data);
                                var todayTime = new Date(new Date().toLocaleDateString()).getTime();
                                var tempTime;
                                var cirFlag=false;

                                for (var i = 0; i < 90; i++) {
                                    $.each(allDatainner,
                                    function(index, item) {
                                        cirFlag =true;
                                        tempTime = new Date(todayTime).toLocaleDateString().replace(/\//g, "-");
                                        if (tempTime == item["name"]) {
                                            finalArrCount.push(item["light_count"]);
                                            firstArrName.push(tempTime);
                                            return false;
                                        } else {
                                            cirFlag= false;
                                        }
                                        
                                    })
                                    if(!cirFlag){
                                        finalArrCount.push(0);
                                        firstArrName.push(tempTime);
                                    }
                                    todayTime = (new Date(tempTime).getTime() - 3600 * 1000 * 24);
                                }
                                lineMiddle.xAxis.data = firstArrName.reverse();
                                lineMiddle.series[0].data = finalArrCount.reverse();
                                console.log(finalArrCount,123465);
                                console.log(firstArrName,789456);
                                allData.echart('line-middle', lineMiddle);
                            }
                        })
        }   
    }
    lineMiddleFun('week');

    $("#lightWeek").click(function(){
        lineMiddleFun('week');
    })
    $("#lightMonth").click(function(){
        lineMiddleFun('month');
    })
    $("#lightThreemonth").click(function(){
        lineMiddleFun('threemonth');
    })

    function rightBarFun(time){
        if(time =="week"){
            var dataInfo = {
                statistic_type: 'week'
            }
        }else if(time =="month"){
            var dataInfo = {
                statistic_type: 'month'
            }
        }else if(time =="threemonth"){
            var dataInfo = {
                statistic_type: 'threemonth'
            }
        }else{
            var dataInfo = {
               
            }
        }
         $.ajax({
                url:'http://192.168.1.117:8080//jehc-web/oaInspectioncloudStatisticController/getLightDeclareStatusStatistics',
                success:function(data){
                    var nameArr=[];
                    var dataArr1=[];
                    var dataArr2=[];
                    var dataArr3=[];
                    $.each(JSON.parse(data),function(index,item){
                        nameArr.push(item.name);
                        dataArr1.push(item.light_count);
                        dataArr2.push(item.leaf_let_count);
                        dataArr3.push(item.finish_count);
                    });
                    rightBar.series[0].data=dataArr1;
                    rightBar.series[1].data=dataArr2;
                    rightBar.series[2].data=dataArr3;
                    allData.echart('rightBar',rightBar);
                }
            });
    }
    rightBarFun();
    $("#rightweek").click(function(){
        rightBarFun('week');
    })
    $("#rightmonth").click(function(){
        rightBarFun('week');
    })
    $('#rightthreemonth').click(function(){
        rightBarFun('threemonth');
    })
   

}
window.addEventListener('DOMContentLoaded',function(){
    function addMap(lat,lng){
            var map = new BMap.Map("smallmap");  
            map.centerAndZoom(new BMap.Point(lat,lng), 20);  
            map.addControl(new BMap.MapTypeControl({
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));     
            map.setCurrentCity("广州");        
            map.enableScrollWheelZoom(true);  
            var marker = new BMap.Marker(new BMap.Point(lat, lng)); 
            map.addOverlay(marker); 
    }
    function tablepopcarousel(obj){
        var flag =0;
        var boxwidth = $(obj).find('.imgCarouselbox').width();
        console.log(1)
        $(obj).find('ul').width($(obj).find('li').length*100+"%");
        $(obj).find('li').width(100/$(obj).find('li').length/3+"%");
        $(obj).find('li').css({
            "padding":'5px',
            "height":'200px'
        });
        $(obj).find(".imgCarouselArrow-right").click(function(){
            console.log($(obj));
            console.log($(obj).find(".imgCarouselArrow-right"),1111)
            flag++;
            if(flag>$(obj).find('li').length/3){
                flag=0;
            }
            console.log($(obj).find('ul'),123);
            $(obj).find('ul').css({
                transform:'translateX(-'+flag*boxwidth+'px)',
                transition:'all 1s'
            })
        })
        $(obj).find('.imgCarouselArrow-left').click(function(){
            flag--;
            if(flag<0){
                flag=Math.floor($(obj).find('li').length/3);
            }
            $(obj).find('ul').css({
                transform:'translateX(-'+flag*boxwidth+'px)',
                transition:'all 1s'
            })
        })
        $(".closeTablePop").click(function(){
            $('.poptableMask').hide();
            $('.poptable').hide();
        });
        // $(".poptableMask").click(function(e){
        //     if(e.target.className=="poptableMask"){
        //         $('.poptableMask').hide();
        //         $('.poptable').hide();
        //     }
        // });
        $(".showMap").mouseover(function(){
            $("#smallmap").show();
        });
        $(".showMap").mouseout(function(){
            $("#smallmap").hide();
        });
        $(".controllTab li:first-child").click(function(){
            $(this).addClass('active');
            $(".controllTab li:last-child").removeClass('active');
            $('.applyBox').show();
            $('.repairBox').css({
                position:'absolute',
                opacity:0
            });
            $(".declareBox").show();
            $(".sendReparir").hide();
        });
        $(".controllTab li:last-child").click(function(){
            $(this).addClass('active');
            $(".controllTab li:first-child").removeClass('active');
            $('.applyBox').hide();
            $('.repairBox').css({
                position:'relative',
                opacity:1
            });
            $(".declareBox").hide();
            $(".sendReparir").show();
        });
            $("#leftTable td").click(function(){
                $('.poptableMask').show();
                $('.poptable').show();
            });
    }
    var Today = new Date().toLocaleDateString().replace(/\//g, "-");
    $('#faultDate').val(Today);
    let _date={};
    $('#faultDate').change(function(){
        _date.date=$(this).val();
        $("#leftTable tbody").empty();
        lightBug();
    });
    function lightBug(){
        $.ajax({
            url:'http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getDeclareReportListByDate',
            data:_date,
            success:function(data){
                var leftTable = JSON.parse(data);
                if(leftTable.length<1){
                    $('.lefttablebox h2').show();
                    return false;
                }
                $('.lefttablebox h2').hide();
                $.each(leftTable,function(index,item){
                    if(item.status==1){
                       item.status1='已申报'; 
                    }else if(item.status==2){
                        item.status1="已派单";
                    }else if(item.status){
                        item.status1="已维修";
                    }
                    $("#leftTable tbody").append('<tr data-id="'+item.id+'" data-status="'+item.status+'"><td title="'+item.declare_time.slice(0,-2)+'"><span>'+item.declare_time.slice(0,-2)+'</span></td><td title="'+item.status1+'"><span>'+item.status1+'</span></td><td title="'+item.fault_type+'"><span>'+item.fault_type+'</span></td><td title="'+item.location+'"><span>'+item.location+'</span></td></tr>');
                });
                $.each($('#leftTable tr'),function(index,item){
                    $(this).click(function(){
                        var typeObj = {
                            id:$(this).attr('data-id'),
                            status:$(this).attr('data-status')
                        };
                        $.ajax({
                            url:'http://192.168.1.117:8080/jehc-web/oaInspectioncloudStatisticController/getDeclareReportDetailById',
                            data:typeObj,
                            success:function(data){
                                var dataRes = JSON.parse(data);
                                $(".de-status").html("状态：已申报");
                                $(".de-time").html("申报时间："+dataRes.declare_time);
                                if(dataRes.location_note==""){
                                    $(".de-location").html("地点："+dataRes.location+"<a href='javascript:;'>点击查看地图</a>");
                                }else{
                                    $(".de-location").html("地点："+dataRes.location+'('+dataRes.location_note+')'+"<a href='javascript:;'>点击查看地图</a>");
                                }
                                $(".de-type").html("故障类型："+dataRes.fault_type);
                                $(".de-light").html("灯号:"+dataRes.light_number+"灯号");
                                    addMap(Number(dataRes.longitude),Number(dataRes.latitude));
                                $(".de-location a").click(function(){
                                    $("#smallmap").toggle();
                                });
                                if(dataRes.declare_description==""){
                                    $('.de-descript').html("申报描述：无");
                                }else{
                                    $('.de-descript').html("申报描述："+dataRes.declare_description);
                                }
                                
                                if(dataRes.status==1){
                                    $(".controllTab li:last-child").hide();
                                    $(".sendReparir").hide();
                                    $(".declareBox").show();
                                }else if(dataRes.status==2){
                                    $(".controllTab li:first-child").removeClass('active');
                                    $(".controllTab li:last-child").addClass('active');
                                    $(".controllTab li:last-child").show();
                                    $(".re-status").html("状态：已派单");
                                    $('.re-appoint').html("派单时间："+dataRes.appoint_time);
                                    $(".re-barrier").html("维修人："+dataRes.barrier_name);
                                    if(dataRes.declare_description==""){
                                        $(".re-desc").html("派单描述：无");
                                    }else{
                                        $(".re-desc").html("派单描述："+dataRes.declare_description);
                                    }
                                    
                                    $('.re-time').html("派单时间："+dataRes.declare_time);
                                    $(".declareBox").hide();
                                    $(".sendReparir").show();
                                    $(".repairBox").hide();
                                }else if(dataRes.status==3){
                                    $(".controllTab li:first-child").removeClass('active');
                                    $(".controllTab li:last-child").addClass('active');
                                    $(".controllTab li:last-child").show();
                                    $(".re-status").html("状态：已维修");
                                    $('.re-appoint').html("派单时间"+dataRes.appoint_time);
                                    $(".re-barrier").html("维修人："+dataRes.barrier_name);
                                    if(dataRes.declare_description==""){
                                        $(".re-desc").html("派单描述：无");
                                    }else{
                                        $(".re-desc").html("派单描述："+dataRes.declare_description);
                                    }
                                    
                                    $('.re-time').html("派单时间："+dataRes.declare_time);
                                    $(".declareBox").hide();
                                    $(".sendReparir").show();
                                    $(".repairBox").show();
                                }
                                
                                $(".applyBox ul").html("");
                                $(".repairBox ul").html("");
                                $.each(dataRes.declare_photo,function(index,item){
                                    $(".applyBox ul").append('<li><img src="http://192.168.1.117:8080'+item+'"></li>');
                                });
                                $.each(dataRes.repair_photo,function(index,item){
                                    $(".repairBox ul").append('<li><img src="http://192.168.1.117:8080'+item+'"></li>');
                                });

                                tablepopcarousel('.applyBox');
                                tablepopcarousel('.repairBox');

                                $.each($('.imgCarouselbox li'),function(index,item){
                                    $(item).click(function(){
                                        var imgSrc = $(this).find('img').attr('src');
                                        $(".bigPic").show();
                                        $(".bigPic img").remove();
                                        $(".bigPic").append("<img src='"+imgSrc+"''>");
                                        $(".bigPic img").css({
                                            "max-height":'80vh'
                                        });
                                        $('.poptableMask').show();
                                        $(".bigPic h2").click(function(){
                                            $(".bigPic").hide();
                                            // $(".poptableMask").hide();
                                        });
                                    });
                                });
                                
                            }
                        });
                    });
                });
            }
        });
    }
    lightBug();
})