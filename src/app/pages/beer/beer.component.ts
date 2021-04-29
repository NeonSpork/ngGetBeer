import { Component, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from "rxjs/operators";
var rpio = require('rpio');

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements AfterViewInit {
  beerPin = 37;
  constructor() {
    rpio.init({mock: 'raspi-3'});
  }

  ngAfterViewInit(): void {
    rpio.open(this.beerPin, rpio.OUTPUT, rpio.LOW);
  }

  ngOnDestroy() {
    rpio.exit();
  }

  temp = 0;
  // Load sensor

  @Output() addClick = new EventEmitter<number>();

  incrementSecretCounter() {
    // Adds one to click counter when neon sign (div id="flexbox-mainLogo") is clicked
    this.addClick.emit(1);
  }

  const beerValve = interval(10000)
  .pipe(takeWhile(() => !stop))
  .subscribe(() => {
      openBeer() {
        this.temp += 1;
      }
    });
}
