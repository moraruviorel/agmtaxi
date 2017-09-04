
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MobileDeviceTraceService } from './mobile_device_trace.serve';
import { AppComponent } from './app.component';
import { DirectionsMapDirective } from './app.directions_map_directive';
import { AppSettings } from './app.settings';
import { OrderComponent } from './order.component';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'order/', pathMatch: 'full'},
      { path: 'order/:id', component: OrderComponent }
    ]),
    AgmCoreModule.forRoot({
      apiKey: AppSettings.Api_Key
    }) ],
  declarations: [ DirectionsMapDirective, AppComponent, OrderComponent ],
  bootstrap: [ AppComponent ],
  providers: [ MobileDeviceTraceService ],
})
export class AppModule {}
