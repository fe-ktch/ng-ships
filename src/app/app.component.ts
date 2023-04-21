/*
* File: app.component.ts
* Author: Sangare F. Felisha
* Copyright: 2023, Sangare F. Felisha
* Group: Szoft II N
* Date: 2023-04-19
* Github: https://github.com/fe-ktch/
* Licenc: GNU GPL
*/

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
