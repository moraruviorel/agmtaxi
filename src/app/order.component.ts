import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MobileDeviceTraceService } from './mobile_device_trace.serve';
import { AppSettings } from './app.settings';

@Component({
    styleUrls: [`./order.component.css`],
    templateUrl: './order.component.html'
})

export class OrderComponent implements OnInit {
  private orderId: string;

  zoom = AppSettings.Zoom;
  // initial center position for the map
  lat = AppSettings.Center_Point_Lat;
  lng = AppSettings.Center_Point_Lng;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => this.orderId = param.get('id'));
  }
}
