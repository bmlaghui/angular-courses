import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import jsPDF from 'jspdf';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-linechart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.scss'
})
export class LinechartComponent {
  public lineChartTitle: string = 'Line-Chart';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

  constructor() {
  }

  ngOnInit() {
    this.getLastHourData();
  }
  getLastHourData() {
    // Implement your logic to update barChartData for the last hour
    const newData: ChartConfiguration<'line'>['data'] = {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
      ],
      datasets: [
        {
          data: [ 65, 59, 80, 81, 56, 55, 40 ],
          label: 'Series A',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
    // Update the chart data
    this.lineChartData = newData;
  }

  getLastDayData() {
    // Implement your logic to update barChartData for the last hour
    const newData: ChartConfiguration<'line'>['data'] = {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
      ],
      datasets: [
        {
          data: [ 85, 21, 33, 99, 10, 50, 100 ],
          label: 'Series A',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
    // Update the chart data
    this.lineChartData = newData;
  }

  getLastWeekData() {
    // Implement your logic to update barChartData for the last hour
    const newData: ChartConfiguration<'line'>['data'] = {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
      ],
      datasets: [
        {
          data: [ 60, 55, 31, 88, 46, 50, 99 ],
          label: 'Series A',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
    // Update the chart data
    this.lineChartData = newData;
  }

  saveAsPng() {
    const canvas = document.querySelector('#Line-Chart') as HTMLCanvasElement;
    const img = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'linechart.png';
    link.href = img;
    link.click();
  }

  saveAsJpg() {
    const canvas = document.querySelector('#Line-Chart') as HTMLCanvasElement;
    const img = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.download = 'linechart.jpg';
    link.href = img;
    link.click();
  }

  saveAsPdf() {
    const canvas = document.querySelector('#Line-Chart') as HTMLCanvasElement;
    const img = canvas.toDataURL('image/jpeg');
    const pdf = new jsPDF();
    pdf.addImage(img, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
    pdf.save('linechart.pdf');
  }

  saveAsSvg() {
    const canvas = document.querySelector('#Line-Chart') as HTMLCanvasElement;
    const img = canvas.toDataURL('image/svg+xml');
    const link = document.createElement('a');
    link.download = 'linechart.svg';
    link.href = img;
    link.click();
  }

  saveAsCsv() {
    const csv =
      'data:text/csv;charset=utf-8,' +
      this.lineChartData.datasets.map(e => e.data.join(',')).join('\n');
    const link = document.createElement('a');
    link.download = 'linechart.csv';
    link.href = encodeURI(csv);
    link.click();
  }



  
}
