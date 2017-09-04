import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './order.component';

const routes: Routes = [
  { path: '', redirectTo: '/order/10', pathMatch: 'full'},
  { path: 'order/:id', component: OrderComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
