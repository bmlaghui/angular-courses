import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import jsPDF from 'jspdf';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-piechart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './piechart.component.html',
  styleUrl: './piechart.component.scss'
})
export class PiechartComponent implements OnInit {
  public pieChartTitle: string = 'Pie-Chart';

  public pieChartOptions: ChartOptions<'pie'> = {
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
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
  }

  ngOnInit(): void {
    
  }

  getLastHourData() {
    // Implement your logic to update PieChartData for the last hour
    const newData = [ 65, 59, 80 ];
    // Update the chart data
    this.pieChartDatasets = [ { data: newData } ];
  }

  getLastDayData() {
    // Implement your logic to update PieChartData for the last hour
    const newData = [ 60, 99, 3 ];
    // Update the chart data
    this.pieChartDatasets = [ { data: newData } ];
  }

  getLastWeekData() {
    // Implement your logic to update PieChartData for the last hour
    const newData = [ 8, 5, 31 ];
    // Update the chart data
    this.pieChartDatasets = [ { data: newData } ];
  }

  getLastMonthData() {
    // Implement your logic to update PieChartData for the last hour
    const newData = [ 14, 11, 0 ];
    // Update the chart data
    this.pieChartDatasets = [ { data: newData } ];
  }

  saveAsPng() {
    const canvas = document.querySelector('#Pie-Chart') as HTMLCanvasElement;
    console.log(canvas);
    const img = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'Piechart.png';
    link.href = img;
    link.click();
  }

  saveAsJpg() {
    const canvas = document.querySelector('#Pie-Chart') as HTMLCanvasElement;
    console.log(canvas);
    const img = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.download = 'Piechart.jpg';
    link.href = img;
    link.click();
  }

  saveAsPdf() {
    const canvas = document.querySelector('#Pie-Chart') as HTMLCanvasElement;
    const img = canvas.toDataURL('image/png');
    const doc = new jsPDF();
    doc.addImage(img, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
    doc.save('Piechart.pdf');
  }

  saveAsSvg() {
    const canvas = document.querySelector('#Pie-Chart') as HTMLCanvasElement;
    const img = canvas.toDataURL('image/svg+xml');
    const link = document.createElement('a');
    link.download = 'Piechart.svg';
    link.href = img;
    link.click();
  }

  saveAsCsv() {
    const csv =
      'data:text/csv;charset=utf-8,' +
      this.pieChartDatasets.map((dataset) => dataset.data.join(',')).join('\n');
    const link = document.createElement('a');
    link.download = 'Piechart.csv';
    link.href = csv;
    link.click();
  }

  




}
