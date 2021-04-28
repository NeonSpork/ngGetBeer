import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngGetBeer';
  secretActive = false;
  clicks = 0;

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    this.clicks += 1;
    if (this.clicks>2) {
      this.clicks=0;
      this.secretActive=true;
    }
  }
}
