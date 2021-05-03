import { Component, Output, OnInit } from '@angular/core';
var rpio = require('rpio');

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
