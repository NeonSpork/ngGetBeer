import { Component, Output, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }


  addClick() {
    // Adds one to click counter when neon sign (div id="flexbox-mainLogo") is clicked
    this.clickCounter++;
    this.temp++;
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
