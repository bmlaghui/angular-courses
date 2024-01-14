import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import jsPDF from 'jspdf';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-linechart',
  standalone: true,
  imports: [NgChartsModule, HttpClientModule, CommonModule],
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.scss'
})
export class LinechartComponent {
  
  public lineChartTitle: string = 'Line-Chart';

  isHourButtonActive: boolean = false;
  isDayButtonActive: boolean = false;
  isWeekButtonActive: boolean = false;

  lineChartData: ChartConfiguration<'line'>['data'] | undefined;

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

  constructor() {
    
  }

  ngOnInit() {
    this.getLastHourData();
  }
  
  async getLastHourData() {
    try {
      const response = await fetch('./assets/datasets/charts/line-chart/hour.json');
      const data = await response.json();
      const label = Object.keys(data)[0];

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
            data: data[label],
            label: label,
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)'
          }
        ]
      };

      // Update the chart data
      this.lineChartData = newData;
      // Set the active class state
      this.isHourButtonActive = true;
      this.isDayButtonActive = false;
      this.isWeekButtonActive = false;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async getLastDayData() {
    try {
      const response = await fetch('./assets/datasets/charts/line-chart/day.json');
      const data = await response.json();
      const label = Object.keys(data)[0];

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
            data: data[label],
            label: label,
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)'
          }
        ]
      };

      // Update the chart data
      this.lineChartData = newData;
      // Set the active class state
      this.isDayButtonActive = true;
      this.isHourButtonActive = false;
      this.isWeekButtonActive = false;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  async getLastWeekData() {
    try {
      const response = await fetch('./assets/datasets/charts/line-chart/week.json');
      const data = await response.json();
      const label = Object.keys(data)[0];

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
            data: data[label],
            label: label,
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)'
          }
        ]
      };

      // Update the chart data
      this.lineChartData = newData;
      // Set the active class state
      this.isWeekButtonActive = true;
      this.isHourButtonActive = false;
      this.isDayButtonActive = false;
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
  
  }



  
}
