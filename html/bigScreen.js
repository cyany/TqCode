console.log(123);
var line1 = {
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
    	right:'0',
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
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
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210],
            areaStyle:{
            	normal:{
            		color:'#A05043'
            	}
            }
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310],
            areaStyle:{
            	normal:{
            		color:'#2A3A46'
            	}
            }
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410],
            areaStyle:{
            	normal:{
            		color:'#5E9DBF'
            	}
            }
        }
    ]
};

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
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
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
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [60,73,85,40,90],
                    name: '某软件'
                }
            ]
        }
        
    ]
};
var base = +new Date(2018, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

var routeComplete = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '大数据量面积图',
        textStyle:{
        	color:'#fff'
        }
    },
    textStyle:{
        	color:'#fff'
        },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [
        {
            name:'模拟数据',
            type:'bar',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: data
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
            color:["#ff0","#ff53ff"]
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
            color:["#f56","#369"]
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
            color:["#ce6","#f69"]
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
    legend: {
    	right:'0',
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
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
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210],
            areaStyle:{
            	normal:{
            		color:'#53ff53'
            	}
            }
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310],
            areaStyle:{
            	normal:{
            		color:'#cef'
            	}
            }
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410],
            areaStyle:{
            	normal:{
            		color:'#5E9DBF'
            	}
            }
        }
    ]
};
var rightBar =  {
	title:{
		text:'title', 
		textStyle:{
			color:'#fff'
		}
	},
	textStyle:{
			color:'#fff'
		},
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['支出', '收入']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'收入',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[320, 302, 341, 374, 390, 450, 420]
        },
        {
            name:'支出',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data:[-120, -132, -101, -134, -190, -230, -210]
        }
    ]
};

var allData ={
	echart:function(id,options){
		echarts.init(document.getElementById(id)).setOption(options);
	},
	init:function(){
		this.echart('line1',line1);
		this.echart('rader',rader);
		this.echart('rader2',rader2);
		this.echart('route-complete',routeComplete);
		this.echart('circle1',circle1);
		this.echart('circle2',circle2);
		this.echart('circle3',circle3);
		this.echart('rightLine1',rightLine1);
		this.echart('rightBar',rightBar);
	}
}
window.onload=function(){
	allData.init();
		var cardWrapWidth = $('#middle-middle').width();
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

	
}
