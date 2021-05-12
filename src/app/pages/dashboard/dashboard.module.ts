import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardPage } from './dashboard.page';
import { NutritionModalContent } from './nutrition.modal';

@NgModule({
  declarations: [DashboardPage, NutritionModalContent],
  imports: [
    CommonModule,
    NgbModalModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardPage,
        data: {
          title: 'Dashboard',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class DashboardModule {}
