import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import jsPDF from 'jspdf';
import { NgChartsModule } from 'ng2-charts';

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
  }

  ngOnInit() {
    this.getLastHourData();
  }

  getLastHourData() {
    // Implement your logic to update barChartData for the last hour
    const newData: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 65, 59, 80 ], label: 'Last Hour A' },
      { data: [ 28, 48, 40 ], label: 'Last Hour B' },
      { data: [ 28, 48, 40 ], label: 'Last Hour C' }
    ];
    // Update the chart data
    this.doughnutChartDatasets = newData;
  }

  getLastDayData() {
    // Implement your logic to update barChartData for the last hour
    const newData: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 10, 21, 33 ], label: 'Last Day A' },
      { data: [ 11, 15, 45 ], label: 'Last Day B' },
      { data: [ 11, 15, 45 ], label: 'Last Day C' }
    ];
    // Update the chart data
    this.doughnutChartDatasets = newData;
  }

  getLastWeekData() {
    // Implement your logic to update barChartData for the last hour
    const newData: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 60, 55, 31 ], label: 'Last Week A' },
      { data: [ 14, 11, 0 ], label: 'Last Week B' },
      { data: [ 14, 11, 0 ], label: 'Last Week C' }
    ];
    // Update the chart data
    this.doughnutChartDatasets = newData;
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
