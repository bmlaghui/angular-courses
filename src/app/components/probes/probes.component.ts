import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProbesService } from '../../services/probes.service';
import { Probes } from '../../interfaces/probes.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-probes',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './probes.component.html',
  styleUrl: './probes.component.scss'
})
export class ProbesComponent implements OnInit {


  public title:string = "Probes"
  probes: Probes[] = [];

  constructor(private probesService: ProbesService) {}

  ngOnInit(): void {
    this.probesService.getProbes().subscribe((probes) => {
    this.probes = probes;
    console.log(probes)
    });
  }

}
