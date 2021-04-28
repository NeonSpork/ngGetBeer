import { Component, HostListener, Input } from '@angular/core';

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

  onResetSecret() {
    this.secretActive=false;
    this.clicks=-1;
    // Clicking the back arrow counts as a click within document
  }

}
