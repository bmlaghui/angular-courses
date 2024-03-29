import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import { LinechartComponent } from '../linechart/linechart.component';
import { PiechartComponent } from '../piechart/piechart.component';
import { DonughtchartComponent } from '../donughtchart/donughtchart.component';
import { BarchartComponent } from '../barchart/barchart.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LinechartComponent, PiechartComponent, DonughtchartComponent, BarchartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
generatePDF() {
      const doc = new jsPDF();
      const margins = {
        top: 30,
        bottom: 30,
        left: 10,
        right: 10
      }
      doc.setFontSize(12);
      doc.save('a4.pdf');
  }

   changeWidgetsOrder(nb: number) {
    const grahsDiv = document.querySelector('.graphs');

    if (grahsDiv instanceof HTMLElement) {
        grahsDiv.style.gridTemplateColumns = `repeat(${nb}, 1fr)`;
    } else {
        console.error('Element with class "grahs" not found.');
    }
}

  
}

