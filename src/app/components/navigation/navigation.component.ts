import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'; // Make sure to import RouterLink if needed
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'] // Use 'styleUrls' instead of 'styleUrl'
})
export class NavigationComponent implements OnInit {
  productionVersion: string;

  constructor() {
    this.productionVersion = ''; // Assign a value in the constructor
  }

  ngOnInit(): void {
    this.productionVersion = environment.productionVersion;
  }
}

