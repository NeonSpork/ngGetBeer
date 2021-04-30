// import { createHostListener } from '@angular/compiler/src/core';
import { Component, HostListener } from '@angular/core';
import { SensorsService } from './sensors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'getBeer';
  secretActive = false;
  clicks = 0;

  constructor(private sensorService:SensorsService){
  }

  onAddClick(clickIncrement: number) {
    this.clicks += clickIncrement;
    if (this.clicks>2) {
      this.clicks=0;
      this.secretActive=true;
    }
  }

  onResetSecret() {
    this.secretActive=false;
    this.clicks=0;
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    // TODO add cancel pouring of beer/vodka
  }

}
