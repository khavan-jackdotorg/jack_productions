Highcharts.setOptions({
    chart: {
        backgroundColor: "background: rgba(244, 242, 239, 0)",
        borderWidth: 0,
        plotBackgroundColor: 'background: rgba(244, 242, 239, 0)',
        plotShadow: false,

        plotBorderWidth: 0,
        styleMode: true,
        style: {
            fontFamily: 'Helvetica',
            fontSize: 21,
            fontColor: "#2D2522"
        },
        xAxis: {
            title: {
                style: {
                    fontColor: "#2D2522"
                }
            }
        },
        responsive: {
            rules: [{
                condition: {
                    width: "100%"
                },
                chartOptions: {
                    legend: {
                        enabled: false
                    }
                }
            }]
        }
    }
});

const data01 = [63.14, 40.26, 20.17, 17.96, 14.34, 11.88, 9.60, 7.43, 6.96, 6.55, 4.39, 3.63, 2.75, 1.93, 1.35, 1.05, 1.05];
const data02 = [{
    name: 'Strongly Disagree',
    data: [
        -4.97, -9.27, -10.26, -8.61
    ]
}, {
    name: 'Disagree',
    data: [
        -6.62, -15.89, -15.23, -10.26
    ]
}, {
    name: 'Neutral',
    data: [
        -27.15, -25.83, -27.81, -27.15
    ]
}, {
    name: 'Strongly Agree',
    data: [
        23.51, 20.86, 17.88, 27.48
    ]
}, {
    name: 'Agree',
    data: [
        37.75, 28.15, 28.81, 26.49
    ]
}]
const data03 = [{
    name: 'Strongly Disagree',
    data: [
        -7.03, -12.63, -9.79, -8.72
    ]
}, {
    name: 'Disagree',
    data: [
        -16.64, -21.80, -18.59, -17.88
    ]
}, {
    name: 'Neutral',
    data: [
        -52.58, -32.92, -40.39, -38.35
    ]
}, {
    name: 'Strongly Agree',
    data: [
        5.34, 9.07, 7.12, 9.34
    ]
}, {
    name: 'Agree',
    data: [
        18.42, 23.58, 24.11, 25.71
    ]
}];
const categories01 = [
    'Academic stress',
    'Financial stress',
    'COVID-19 pandemic',
    'Relationships with family',
    'Finding a job',
    'Work stress',
    'Relationships with peers',
    'Dating',
    'Other health-related stress',
    'Housing stress',
    'Other - Write In',
    'Social media',
    'Climate change',
    'Food insecurity',
    'My own substance use',
    'Substance use by friends or family',
    'Experiences with the justice system'
];
const categories02 = [
    "The campus mental health services I used were high quality ",
    "The campus mental health services I used were accessible when I needed them",
    "The campus mental health services  I used met my needs",
    "The campus mental health services I used were responsive to my background and experiences"
];
const categories03 = [
    "I believe my campus mental health services are high quality ",
    "I think my campus mental health services would be accessible in a timely manner, if I should ever need them ",
    "I believe my campus mental health services would meet my needs ",
    "I believe my campus mental health services would be responsive to my background and experience "
];
const color01 = ['#F4F2EF'];
const color02 = ['#2D2522','#43637E','#A5CCEE','#F4F2EF','#CAE7FC'];


document.addEventListener('DOMContentLoaded', function () {
    const chartdiv01 = Highcharts.chart('chartdiv01', {
        chart: {
            type: 'bar',
        },
        colors: color01,
        xAxis: {
            categories: categories01,
            labels: {
                style: {
                    color: "#f4f2ef",
                    fontSize: "16px"
                }
            }
        },
        yAxis: {
            title: {
                text: 'Percent (%) of students',
                style: {
                    color: "#f4f2ef"
                }
            },
            labels: {
                style: {
                    color: "#f4f2ef",
                    fontSize: "21px"
                }
            }
        },
        tooltip: {
            pointFormat: '{point.category}: {point.y}',
            style: {
                color: '#F4F2EF',
                fontSize: "18px"
            },
            backgroundColor: "#2D2522"
        },
        series: [{
            name: 'Percent (%) of students',
            data: data01,
            column: {
                borderWidth: 0
            }
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
        colors: color02,
        xAxis: [{
            categories: categories02,
            reversed: false,
            labels: {
                step: 1,
                style: {
                    color: "#f4f2ef",
                    fontSize: "16px"
                },
                autoRotation: [-45]
            },
            accessibility: {
                description: 'Agree'
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: categories02,
            linkedTo: 0,
            labels: {
                step: 1,
                enabled: false,
                style: {
                    color: "#f4f2ef",
                    fontSize: "16px"
                },
                autoRotation: [-45]

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
                },
                style: {
                    color: "#f4f2ef"
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
            },
            style: {
                color: '#F4F2EF',
                fontSize: "18px"
            },
            backgroundColor: "#2D2522"
        },

        series: data02
    });
    const chartdiv03 = Highcharts.chart('chartdiv03', {
        chart: {
            type: 'bar'
        },
        credits: {
            enabled: false
        },
        colors: color02,
        xAxis: [{
            categories: categories03,
            reversed: false,
            labels: {
                step: 1,
                autoRotation: [-45]
            },
            accessibility: {
                description: 'Agree'
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: categories03,
            linkedTo: 0,
            labels: {
                step: 1,
                enabled: false
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

        series: data03
    });

});