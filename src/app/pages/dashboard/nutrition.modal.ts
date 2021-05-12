import { Component, Inject, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiClient } from '../services/apiclient';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Nutrition content of {{ name }}</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div *ngIf="nutrients && nutrients.length > 0">
        <table>
          <tr>
            <th>Label</th>
            <th>Quantity</th>
            <th>unit</th>
          </tr>
          <tr *ngFor="let nutrient of nutrients">
            <td>{{ nutrient.label }}</td>
            <td>{{ nutrient.quantity }}</td>
            <td>{{ nutrient.unit }}</td>
          </tr>
        </table>
      </div>
      <div *ngIf="nutrients.length == 0">Loading data....</div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
  `,
})
export class NutritionModalContent implements OnInit {
  @Input() name: string = '';
  nutrients: any[] = [];

  constructor(
    @Inject(NgbActiveModal) public activeModal: NgbActiveModal,
    public apiClient: ApiClient
  ) {}
  ngOnInit() {
    this.apiClient
      .get<any>({
        url:
          'https://api.edamam.com/api/nutrition-data?app_id=aa4f1d38&app_key=1cd1bf7e8515eab12de66f7795579aef&ingr=1%20large%20' +
          this.name,
      })
      .then((x) => {
        this.nutrients = [];
        for (let key in x.totalNutrientsKCal) {
          let nutrient = {
            label: x.totalNutrientsKCal[key].label,
            quantity: x.totalNutrientsKCal[key].quantity,
            unit: x.totalNutrientsKCal[key].unit,
          };
          this.nutrients.push(nutrient);
        }
      });
  }
}
