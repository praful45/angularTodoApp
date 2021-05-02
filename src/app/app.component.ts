import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yoki';
  constructor(){
    // setTimeout(() => {
    //   this.title = "Yokiso"
    // }, 1500);
  }
}
