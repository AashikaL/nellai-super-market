import { Component } from '@angular/core';

@Component({
  selector: 'app-my-order-tracking',
  templateUrl: './my-order-tracking.component.html',
  styleUrls: ['./my-order-tracking.component.scss']
})
export class MyOrderTrackingComponent {
  steps = [
    { text: 'Order placed' },
    { text: 'Order processed' },
    { text: 'Order shipped' },
    { text: 'Order delivered' }
  ];
}

