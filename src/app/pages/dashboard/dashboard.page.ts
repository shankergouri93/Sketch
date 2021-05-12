import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NutritionModalContent } from './nutrition.modal';

@Component({
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  fruits: Fruit[];
  constructor(private modalService: NgbModal) {
    this.fruits = [
      {
        name: 'Apple',
        content:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img_src: '/public/fruits/apple.PNG',
      },
      {
        name: 'Banana',
        content:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img_src: '/public/fruits/banana.PNG',
      },
      {
        name: 'Promagranate',
        content:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img_src: '/public/fruits/promagranate.PNG',
      },
    ];
  }
  open(fruitname: string) {
    const modalRef = this.modalService.open(NutritionModalContent);
    modalRef.componentInstance.name = fruitname;
  }
}

export interface Fruit {
  name: string;
  img_src: string;
  content: string;
}
