import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ship: any;

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.addShip(this.ship).subscribe(
      (data: any) => {
        console.log('Ship added successfully:', data);
      },
      (error) => {
        console.error('Error adding ship:', error);
      }
    );
  }
}
