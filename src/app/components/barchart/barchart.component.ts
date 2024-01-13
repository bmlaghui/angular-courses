import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import jsPDF from 'jspdf';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  public barChartTitle: string = 'Bar-Chart';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
    ]
  };


  getLastHourData() {
    // Implement your logic to update barChartData for the last hour
    const newData: ChartData<'bar'> = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Last Hour A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Last Hour B' }
      ]
    };
    // Update the chart data
    this.barChartData = newData;
  }

  getLastDayData() {
    // Implement your logic to update barChartData for the last hour
    const newData: ChartData<'bar'> = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [
        { data: [85, 21, 33, 99, 10, 50, 100], label: 'Last Hour A' },
        { data: [11, 15, 45, 8, 9, 60, 11], label: 'Last Hour B' }
      ]
    };
    // Update the chart data
    this.barChartData = newData;
  }

  getLastWeekData() {
    // Implement your logic to update barChartData for the last hour
    const newData: ChartData<'bar'> = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [
        { data: [60, 55, 31, 88, 46, 50, 99], label: 'Last Hour A' },
        { data: [14, 11, 0, 66, 56, 99, 91], label: 'Last Hour B' }
      ]
    };
    // Update the chart data
    this.barChartData = newData;
  }

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
    // Add other chart options as needed
  };

  constructor() {}

  ngOnInit() {
    this.getLastHourData();
  }

  saveAsPng() {
    const canvas = document.querySelector('#Bar-Chart') as HTMLCanvasElement;
    console.log(canvas);
    const img = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'barchart.png';
    link.href = img;
    link.click();
  }

  saveAsJpg() {
    const canvas = document.querySelector('#Bar-Chart') as HTMLCanvasElement;
    console.log(canvas);
    const img = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.download = 'barchart.jpg';
    link.href = img;
    link.click();
  }

  saveAsPdf() {
    const canvas = document.querySelector('#Bar-Chart') as HTMLCanvasElement;
    const img = canvas.toDataURL('image/png');
    const doc = new jsPDF();
    doc.addImage(img, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
    doc.save('barchart.pdf');
  }

  saveAsSvg() {
    const canvas = document.querySelector('#Bar-Chart') as HTMLCanvasElement;
    const img = canvas.toDataURL('image/svg+xml');
    const link = document.createElement('a');
    link.download = 'barchart.svg';
    link.href = img;
    link.click();
  }

  saveAsCsv() {
    const csv =
      'data:text/csv;charset=utf-8,' +
      this.barChartData.datasets.map((dataset) => dataset.data.join(',')).join('\n');
    const link = document.createElement('a');
    link.download = 'barchart.csv';
    link.href = csv;
    link.click();
  }
}