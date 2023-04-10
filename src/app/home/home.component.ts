import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: any;
  constructor() {
    this.images = [{
      url: '../assets/clem-onojeghuo-c4pbb7yNM2c-unsplash.jpg'
    },
    {
      url: '../assets/firmbee-com-SpVHcbuKi6E-unsplash.jpg',
    },
    {
      url: '../assets/john-schnobrich-2FPjlAyMQTA-unsplash.jpg',
    }, {
      url: '../assets/peri-stojnic-r3rbIwZ9DJc-unsplash.jpg',
    }, {
      url: '../assets/manja-vitolic-7tOV35hnkao-unsplash.jpg',
    },
    {
      url: '../assets/volodymyr-yarossvit-TuPFc2iLnKs-unsplash.jpg',

    }]
  }
}
