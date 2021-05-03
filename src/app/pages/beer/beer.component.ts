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
import * as gpio from "rpi-gpio";
import { DIR_OUT } from 'rpi-gpio';

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
    // Initialize pins
    gpio.setup(this.beerPin, gpio.DIR_OUT);
    gpio.setup(this.vodkaPin, gpio.DIR_OUT);
    // Set initial state to OFF
    gpio.write(this.beerPin, false);
    gpio.write(this.vodkaPin, false);
  }

  ngOnDestroy(): void {
    gpio.write(this.beerPin, false);
    gpio.write(this.vodkaPin, false);
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
