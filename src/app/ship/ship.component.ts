/*
* File: ship.component.ts
* Author: Sangare F. Felisha
* Copyright: 2023, Sangare F. Felisha
* Group: Szoft II N
* Date: 2023-04-19
* Github: https://github.com/fe-ktch/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['../app.component.scss'],
})
export class ShipComponent {
  ships: any;
  newShip: any = {};
  columns = ['Név', 'Hossz', 'Ár', 'Férőhely', 'Vontató'];
  index = ['name', 'length', 'price', 'person', 'trailer'] as const;
  showInputFields = false;
  constructor(private apiService: ApiService) {}

  toggleInputFields() {
    this.showInputFields = !this.showInputFields;
  }
  onSubmit() {
    this.apiService.addShip(this.newShip).subscribe(
      (data: any) => {
        console.log('Ship added successfully:', data);
        // Refresh the list of ships after adding a new ship
        this.ngOnInit();
        // Reset the newShip object after successful submission
        this.newShip = {};
      },
      (error) => {
        console.error('Error adding ship:', error);
      }
    );
  }
  ngOnInit() {
    this.apiService.getShips().subscribe(
      (data: any) => {
        this.ships = data;
        console.log('Ships:', this.ships);
      },
      (error: any) => {
        console.error('Error fetching ships:', error);
      }
    );
  }
}
