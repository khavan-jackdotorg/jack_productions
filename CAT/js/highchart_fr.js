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
            fontColor: "#f4f2ef"
        },
        xAxis: {
            title: {
                style: {
                    fontColor: "#f4f2ef"
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
    name: 'Fortement en désaccord',
    data: [
        -4.97, -9.27, -10.26, -8.61
    ]
}, {
    name: 'En désaccord',
    data: [
        -6.62, -15.89, -15.23, -10.26
    ]
}, {
    name: 'Neutre',
    data: [
        -27.15, -25.83, -27.81, -27.15
    ]
}, {
    name: 'Fortement en accord',
    data: [
        23.51, 20.86, 17.88, 27.48
    ]
}, {
    name: 'En accord',
    data: [
        37.75, 28.15, 28.81, 26.49
    ]
}]
const data03 = [{
    name: 'Fortement en désaccord',
    data: [
        -7.03, -12.63, -9.79, -8.72
    ]
}, {
    name: 'En désaccord',
    data: [
        -16.64, -21.80, -18.59, -17.88
    ]
}, {
    name: 'Neutre',
    data: [
        -52.58, -32.92, -40.39, -38.35
    ]
}, {
    name: 'Fortement en accord',
    data: [
        5.34, 9.07, 7.12, 9.34
    ]
}, {
    name: 'En accord',
    data: [
        18.42, 23.58, 24.11, 25.71
    ]
}];
const categories01 = [
    'Stress scolaire',
    'Stress financier',
    'Pandémie de COVID-19',
    'Relations familiales',
    'Trouver un emploi',
    'Stress professionnel',
    'Relations avec les pairs',
    'Relations intimes',
    'Autre stress lié à la santé',
    'Stress lié au logement',
    'Autre – précisez',
    'Médias sociaux',
    'Changements climatiques',
    'Insécurité alimentaire',
    'Ma consommation d’alcool et de drogues',
    'La consommation d’alcool et de drogues de mes amis ou des membres de ma famille',
    'Expériences dans le système judiciaire'


];
const categories02 = [
    "Les services en santé mentale auxquels j’ai eu recours sur le campus étaient de grande qualité ",
    "Les services en santé mentale auxquels j’ai eu recours sur le campus étaient accessibles quand j’en ai eu besoin",
    "Les services en santé mentale auxquels j’ai eu recours sur le campus répondaient à mes besoins",
    "Les services en santé mentale auxquels j’ai eu recours sur le campus étaient adaptés à mon vécu et à mes expériences"
];
const categories03 = [
    "Je crois que les services en santé mentale de mon campus sont de grande qualité",
    "Je pense que les services en santé mentale de mon campus seraient rapidement accessibles si j’en avais besoin",
    "Je crois que les services en santé mentale de mon campus répondraient à mes besoins",
    "Je crois que les services en santé mentale de mon campus seraient adaptés à mon vécu et à mon expérience"
];
const color01 = ['#F4F2EF'];
const color02 = ['#2D2522','#43637E','#A5CCEE','#F4F2EF','#CAE7FC'];


document.addEventListener('DOMContentLoaded', function () {
    const chartdiv01 = Highcharts.chart('chartdiv01', {
        chart: {
            type: 'bar',
        },
        title: {
            style: {
                display: "none"
            }
        },
        credits: {
            enabled: false
        },
        colors: color01,
        xAxis: {
            categories: categories01,
            labels: {
                style: {
                    color: "#f4f2ef",
                    fontSize: "16px",
                    maxWidth: "80px"
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
        title: {
            style: {
                display: "none"
            }
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
                description: 'En accord'
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
                description: 'En désaccord'
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
        title: {
            style: {
                display: "none"
            }
        },
        colors: color02,
        xAxis: [{
            categories: categories03,
            reversed: false,
            labels: {
                step: 1,
                autoRotation: [-45],
                style: {
                    color: "#f4f2ef",
                    fontSize: "16px"
                },
            },
            accessibility: {
                description: 'En accord'
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
                description: 'En désaccord'
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
                    color: "#f4f2ef",
                    fontSize: "16px"
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