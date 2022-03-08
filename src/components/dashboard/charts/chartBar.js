import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

let delayed;

export const chartBar = {
    data: {
        labels: ['HTML Tools, Forms, History', 'Tags & References in HTML', 'Tables & CSS Basics', 'Tables & CSS Basics'],
        datasets: [
            {
                label: 'skill level',
                data: [80, 60, 24, 96],
                backgroundColor: [
                '#438AF6',
                '#FF9142',
                '#FB5E5E',
                '#2EC971',
                ],
                borderRadius: 100,
                color: '#fff',
                categoryPercentage: 0.3,
                // barPercentage: 0.5,
                borderSkipped: false,
            },
        ],
    },
    plugins: [ChartDataLabels],
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'right',
                color: [
                '#438AF6',
                '#FF9142',
                '#FB5E5E',
                '#2EC971',
                ],
                font: {
                    size: 16,
                    weight: 400,
                },
                formatter: function(value, context) {
                return value + '%';
                }
            },
            legend: {
                display: false,
            }
        },
        maintainAspectRatio: false,
        layout: {
            padding: {
                // right: 100,
            },
        },
        animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            y: {
                grid: {
                    color: '#fff',
                    borderColor: '#fff',
                },

                ticks: {
                    // display: false,
                    z: 2,
                    // align: 'end',
                    color: '#566474',
                    // mirror: true,
                    font: {
                        family: 'DM Sans',
                        weight: '300',
                        size: 16,
                    },
                    beginAtZero: true,
                }
            },
            x: {
                max: 120,
                grid: {
                    color: '#fff',
                    borderColor: '#fff',
                },
                ticks: {
                    display: false,
                }
            },
        },
    }
}

