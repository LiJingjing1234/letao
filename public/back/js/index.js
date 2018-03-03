/**
 * Created by DELL on 2018/3/3.
 */
$(function () {
    //����ͼ
    var myChart = echarts.init(document.querySelector(".pic_left"));
    // ָ��ͼ��������������
    var option = {
        title: {
            text: '2018��ע������'
        },
        tooltip: {},
        legend: {
            data:['����']
        },
        xAxis: {
            data: ["1��","2��","3��","4��","5��","6��"]
        },
        yAxis: {},
        series: [{
            name: '����',
            type: 'bar',
            data: [10000, 2000, 3036, 2501, 5002, 8001]
        }]
    };
    myChart.setOption(option);


    var myChart1 = echarts.init(document.querySelector(".pic_right"));

    var option1 = {
        title : {
            text: '����Ʒ������',
            subtext: '2018��3��',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['�Ϳ�','����','����','�°���','������']
        },
        series : [
            {
                name: '������Դ',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'�Ϳ�'},
                    {value:310, name:'����'},
                    {value:234, name:'����'},
                    {value:135, name:'�°���'},
                    {value:1548, name:'������'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart1.setOption(option1);

});