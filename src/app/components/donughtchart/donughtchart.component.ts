import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import jsPDF from 'jspdf';
import { NgChartsModule } from 'ng2-charts';
import * as data from '../../../assets/localData.json';

@Component({
  selector: 'app-donughtchart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './donughtchart.component.html',
  styleUrl: './donughtchart.component.scss'
})
export class DonughtchartComponent implements OnInit {
  public doughnutChartTitle: string = 'Doughnut-Chart';
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
     
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Display the legend
        position: 'right', // or 'bottom', 'left', 'right'
        align: 'center', // or 'start', 'end'
        labels: {
          boxWidth: 20, // Width of the colored box in the legend
          padding: 5, // Padding between legend elements
          usePointStyle: false, // Use a circular point style in the legend
        }
      }
    }

  };

  constructor() {
    console.log(data);
  }

  ngOnInit() {
    this.getLastHourData();
  }

  getLastHourData() {
    // Assuming data is the variable holding your JSON data
    const donutChart = data.charts.find(chart => 'donutchart' in chart)?.donutchart;
  
    if (donutChart) {
      const newData: ChartConfiguration<'doughnut'>['data']['datasets'] = [
        { data: donutChart.averages.hour['Last Hour A'], label: 'Last Hour A' },
        { data: donutChart.averages.hour['Last Hour B'], label: 'Last Hour B' },
        { data: donutChart.averages.hour['Last Hour C'], label: 'Last Hour C' }
      ];
  
      this.updateDoughnutChartData(newData);
    }
  }
  
  private updateDoughnutChartData(newData: ChartConfiguration<'doughnut'>['data']['datasets']): void {
    this.doughnutChartDatasets = newData;
  }
  

  getLastDayData() {
    // Implement your logic to update barChartData for the last hour
    const donutChart = data.charts.find(chart => 'donutchart' in chart)?.donutchart;
  
    if (donutChart) {
      const newData: ChartConfiguration<'doughnut'>['data']['datasets'] = [
        { data: donutChart.averages.day['Last Day A'], label: 'Last Day A' },
        { data: donutChart.averages.day['Last Day B'], label: 'Last Day B' },
        { data: donutChart.averages.day['Last Day C'], label: 'Last Day C' }
      ];
      this.updateDoughnutChartData(newData);
    }
  }

  getLastWeekData() {
    // Implement your logic to update barChartData for the last hour
    const donutChart = data.charts.find(chart => 'donutchart' in chart)?.donutchart;
  
    if (donutChart) {
      const newData: ChartConfiguration<'doughnut'>['data']['datasets'] = [
        { data: donutChart.averages.week['Last Week A'], label: 'Last Week A' },
        { data: donutChart.averages.week['Last Week B'], label: 'Last Week B' },
        { data: donutChart.averages.week['Last Week C'], label: 'Last Week C' }
      ];
    }
  }
  
  saveAsPng() {
    const canvas = document.querySelector('#Doughnut-Chart') as HTMLCanvasElement;
    const img = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'donughtchart.png';
    link.href = img;
    link.click();
  }

  saveAsJpg() {
    const canvas = document.querySelector('#Doughnut-Chart') as HTMLCanvasElement;
    const img = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.download = 'donughtchart.jpg';
    link.href = img;
    link.click();
  }

  saveAsPdf() {
    const canvas = document.querySelector('#Doughnut-Chart') as HTMLCanvasElement;
    const img = canvas.toDataURL('image/png');
    const doc = new jsPDF();
    doc.addImage(img, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
    doc.save('donughtchart.pdf');
  }

  saveAsSvg() {
    const canvas = document.querySelector('#Doughnut-Chart') as HTMLCanvasElement;
    const img = canvas.toDataURL('image/svg+xml');
    const link = document.createElement('a');
    link.download = 'donughtchart.svg';
    link.href = img;
    link.click();
  }

  public donughtchartData: ChartConfiguration<'bar'>['data']['datasets'] = [
    { data: [ 350, 450, 100 ], label: 'Series A' },
    { data: [ 50, 150, 120 ], label: 'Series B' },
    { data: [ 250, 130, 70 ], label: 'Series C' }
  ];
  saveAsCsv() {
    const csv = [
      [ 'data1', 'data2', 'data3' ],
      [ 'data4', 'data5', 'data6' ],
      [ 'data7', 'data8', 'data9' ]
    ];
    const link = document.createElement('a');
    link.download = 'donughtchart.csv';
    link.href = 'data:text/csv;charset=utf-8,' + csv.join('\n');
    link.click();
  }

}
