import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-component',
  templateUrl: './not-found-component.component.html',
  styleUrls: ['./not-found-component.component.scss']
})
export class NotFoundComponentComponent implements OnInit {
  currentLight = 'red';
  ngOnInit(): void {
    setInterval(() => {
      switch (this.currentLight) {
        case 'red':
          this.currentLight = 'yellow';
          break;
        case 'yellow':
          this.currentLight = 'green';
          break;
        case 'green':
          this.currentLight = 'red';
          break;
        default:
          this.currentLight = 'red';
          break;
      }
    }, 3000);
  }

  
}


