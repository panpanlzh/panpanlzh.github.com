var LineColorArr = ['#FB5200', '#DE1F5B', '#FF7345', '#FFBA19', '#FFE500', '#F6F9A6']; //折线色值
var ColumnColorArr = ['#015073', '#4BACC6', '#08BAFF', '#5A92AD', '#94AEC3', '#9CD5F2']; //柱状色值
var BarColorArr = ['#4F81BD', '#8064A2', '#4BACC6', '#F79646', '#9BBB59', '#C0504D']; //饼图色值

//单根折线图
var LinePic = {
    myChartsingl: null,
    /* titleText 上方的描述
    arrX x轴数据源  Array
    arrY y轴数据源  Array
    rendTo 输出至ID 
    unit y轴上需要显示的单位
    */
    //GetOption: function(titleText, arrX, arrY, rendTo, unit, max, min) {
    GetOption: function (titleText, arrX, arrY, rendTo, unit, ItemNum) {
        var option = {
            chart: {
                renderTo: rendTo,
                animation: true,
                showAxes: false
            },
            title: {
                text: '',
                x: 50 //center
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                enabled: true,
                margin: 5
                //itemMargintop: 5,
                //floating: true,
                //y:15    
            },
            xAxis: {
                type: 'liner',
                categories: arrX,
                //startOnTick: false,
                //endOnTick: true,
                //showFirstLabel:false,
                //startOnTick: false,
                //showLastLabel: true,
                tickColor: '#fff',
                tickInterval: ItemNum,
                showLastLabel: true,
                labels: {
                    //align: "right",
                    staggerLines: 1,
                    //step: 30,
                    align: 'center',
                    formatter: function () {
                        return this.value;
                    },
                    style: {
                        fontSize: '9px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                //valueSuffix: unitTxt,
                formatter: function () {
                    return '<b>' + this.x + ':</b>' + parseFloat(this.y) + unit;
                }
            },
            yAxis: {
                title: {
                    text: "",
                },
                //max: max,
                //min: min,
                labels: {
                    scolor: '#340000',
                    style: {
                        fontSize: '9px',
                        fontFamily: 'Verdana, sans-serif'
                    },
                    formatter: function () {
                        return this.value + unit;
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080',
                }]
            },
            //plotOptions:{       //绘图线条控制
            //    marker:{  
            //        enabled: false,//是否显示点
            //    }
            //},
            series: [{
                marker: {
                    enabled: false,//是否显示点
                },
                name: titleText,
                data: arrY,
                color: '#3E85D2'
            }
            ]
        }
        return option;
    },
    /* titleText 上方的描述
    arrX x轴数据源  x1,x2,x3
    arrY y轴数据源  y1,y2,y3
    rendTo 输出至ID 
    unit y轴上需要显示的单位
    */
    ChartInit: function (rendTo, ItemNum, dataStrX, dataStrY, titleText, unit) {
        var arrX = dataStrX.split(',');
        var arrY = dataStrY.split(',');
        var dataArr = new Array();
        var max = 0, min = 0;
        for (var i = 0; i < arrY.length; i++) {
            var value = parseFloat(arrY[i]);
            dataArr.push(parseFloat(arrY[i]));
        }
        //LinePic.myChart = new Highcharts.Chart(LinePic.GetOption(titleText, arrX, dataArr, rendTo, unit, max * 1.1, min * 0.9));
        LinePic.myChartsingl = new Highcharts.Chart(LinePic.GetOption(titleText, arrX, dataArr, rendTo, unit, ItemNum));
    }
}