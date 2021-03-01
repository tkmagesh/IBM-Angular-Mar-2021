import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Very First App';
  currentTime = new Date().toString()

  constructor(){
    /* setInterval(() => {
      this.currentTime = new Date().toString();
    }, 1000) */
  }

  updateTime(){
    this.currentTime = new Date().toString();
  }
}
