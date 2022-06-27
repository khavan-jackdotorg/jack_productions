Highcharts.setOptions({
    chart: {
        backgroundColor: "#3990DC",
        borderWidth: 2,
        plotBackgroundColor: '#2D2522',
        plotShadow: true,
        plotBorderWidth: 1,
        style: {
            fontFamily: 'Helvetica',
            fontSize: 21,
            fontColor: "#2D2522"
        }
    }
});

const data01 = [63.14, 40.26, 20.17, 17.96, 14.34, 11.88, 9.60, 7.43, 6.96, 6.55, 4.39, 3.63, 2.75, 1.93, 1.35, 1.05, 1.05];
const categories02 = [
    "The campus mental health services I used were high quality ",
    "The campus mental health services I used were accessible when I needed them",
    "The campus mental health services  I used met my needs",	
    "The campus mental health services I used were responsive to my background and experiences"
];

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('barchart', {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Causes of Struggle Survey'
        },
        xAxis: {
            categories: ['Academic stress', 'Financial stress', 'COVID-19 pandemic', 'Relationships with family', 'Finding a job', 'Work stress', 'Relationships with peers', 'Dating', 'Other health-related stress', 'Housing stress', 'Other - Write In', 'Social media', 'Climate change', 'Food insecurity', 'My own substance use', 'Substance use by friends or family', 'Experiences with the justice system' ],
            lineColor: "#2d2522"
        },
        yAxis: {
            title: {
                text: 'Percent (%) of students'
            },
            lineColor: "#2d2522"
        },
        tooltip: {
            pointFormat: '{point.category}: {point.y}',
            style: {
                color: '#F4F2EF',
                fontSize: "18px"
            },
            backgroundColor:"#2D2522"
            
        },
        series: [{
            name:'Percent (%) of students',
            data: data01
        }],
        legend: {
            enabled: false
        }
    });
    

    const chartdiv02 = Highcharts.chart('chartdiv02', {
        chart: {
            type: 'bar'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Service User Perceptions'
        },
        xAxis: [{
            categories: categories02,
            reversed: false,
            labels: {
                step: 1
            },
            accessibility: {
                description: 'Agree'
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: categories,
            linkedTo: 0,
            labels: {
                step: 1
            },
            accessibility: {
                description: 'Disagree'
            }
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return Math.abs(this.value) + '%';
                }
            },
            accessibility: {
                description: 'Survey Questions'
            }
        },
    
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
    
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                    'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
            }
        },
    
        series: [{
            name: 'Strongly Disagree',
            data: [
                -4.97,	-9.27,	-10.26,	-8.61
            ]
        }, {
            name: 'Disagree',
            data: [
                -6.62,	-15.89,	-15.23,	-10.26
            ]
        }, {
            name: 'Neutral',
            data: [
                -27.15, -25.83,	-27.81,	-27.15
            ]
        }, {
            name: 'Agree',
            data: [
                37.75,	28.15,	28.81,	26.49
            ]
        }, {
            name: 'Strongly Agree',
            data: [
                23.51,	20.86,	17.88,	27.48
            ]
        }]
    });
        
});