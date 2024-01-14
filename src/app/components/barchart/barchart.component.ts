import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import jsPDF from 'jspdf';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [NgChartsModule, CommonModule],
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  isHourButtonActive: boolean = false;
  isDayButtonActive: boolean = false;
  isWeekButtonActive: boolean = false;
  public barChartTitle: string = 'Bar-Chart';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
    ]
  };


  async getLastHourData() {
    try {
      const response = await fetch('./assets/datasets/charts/bar-chart/hour.json');
      const data = await response.json();
      console.log(data['data']);
  
      const datasets = Object.keys(data['data']).map((key, index) => {
        const backgroundColors = [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          // Add more colors as needed
        ];
  
        return {
          data: data['data'][key],
          label: key,
          borderColor: 'black',
          backgroundColor: backgroundColors[index % backgroundColors.length] // Cycle through colors
        };
      });
  
      const newData: ChartData<'bar'> = {
        labels: data['labels'] as string[],
        datasets: datasets
      };
  
      this.barChartData = newData;
      // Set the active class state
      this.isHourButtonActive = true;
      this.isDayButtonActive = false;
      this.isWeekButtonActive = false;

    } catch (error) {
      console.error(error);
    }
  }
  
  async getLastDayData() {
    try {
      const response = await fetch('./assets/datasets/charts/bar-chart/day.json');
      const data = await response.json();
      console.log(data['data']);
  
      const datasets = Object.keys(data['data']).map((key, index) => {
        const backgroundColors = [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          // Add more colors as needed
        ];
  
        return {
          data: data['data'][key],
          label: key,
          borderColor: 'black',
          backgroundColor: backgroundColors[index % backgroundColors.length] // Cycle through colors
        };
      });
  
      const newData: ChartData<'bar'> = {
        labels: data['labels'] as string[],
        datasets: datasets
      };
  
      this.barChartData = newData;
      // Set the active class state
      this.isHourButtonActive = false;
      this.isDayButtonActive = true;
      this.isWeekButtonActive = false;

    } catch (error) {
      console.error(error);
    }
  }

  async getLastWeekData() {
    try {
      const response = await fetch('./assets/datasets/charts/bar-chart/week.json');
      const data = await response.json();
      console.log(data['data']);
  
      const datasets = Object.keys(data['data']).map((key, index) => {
        const backgroundColors = [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          // Add more colors as needed
        ];
  
        return {
          data: data['data'][key],
          label: key,
          borderColor: 'black',
          backgroundColor: backgroundColors[index % backgroundColors.length] // Cycle through colors
        };
      });
  
      const newData: ChartData<'bar'> = {
        labels: data['labels'] as string[],
        datasets: datasets
      };
  
      this.barChartData = newData;
      // Set the active class state
      this.isHourButtonActive = false;
      this.isDayButtonActive = false;
      this.isWeekButtonActive = true;

    } catch (error) {
      console.error(error);
    }
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