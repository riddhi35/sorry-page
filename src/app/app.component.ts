import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  next() {
    window.location.href = 'https://www.youtube.com/watch?v=8ELbX5CMomE&list=RD8ELbX5CMomE&start_radio=1';
  }

}