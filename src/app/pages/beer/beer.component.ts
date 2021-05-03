import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import * as rpio from "rpio";

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  secretActive = false;
  temp = 0;
  pints = 99;
  clickCounter = 0;
  clicksForSecret = 3;
  beerPin = 37;
  vodkaPin = 38;

  constructor() { }

  ngOnInit(): void {
    rpio.init({ mock: 'raspi-3' });
    rpio.on('warn', function () { });
    rpio.open(this.beerPin, rpio.OUTPUT);
    rpio.open(this.vodkaPin, rpio.OUTPUT);
  }

  ngOnDestroy(): void {
    rpio.exit();
  }

  addClick() {
    // Adds one to click counter when neon sign (div id="flexbox-mainLogo") is clicked
    this.clickCounter++;
    if (this.clickCounter >= this.clicksForSecret) {
      this.secretActive = true;
    }
  }

  backToBeer() {
    this.secretActive = false;
    this.clickCounter = 0;
  }

  openBeer() {
    // GPIO pin to open beer
  }

  openVodka() {
    // GPIO pin to open vodka
  }

}
