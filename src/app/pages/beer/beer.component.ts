import { Component, Output, EventEmitter, OnInit } from '@angular/core';
var rpio = require('rpio');
import { Board, Thermometer } from 'johnny-five';
var hx = require('@ataberkylmz/hx711');


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  temp = 0;
  initializeTemp() {
    const board = new Board();

    board.on("ready", () => {
      // This requires OneWire support using ConfigurableFirmata
      const thermometer = new Thermometer({
        controller: "DS18B20",
        pin: 4
      });

      thermometer.on("change", () => {
        const { celsius } = thermometer;
        console.log("  celsius      : ", celsius);
        this.temp = celsius;
      });
    });
  }

  // Load sensor
  clockpin: number = 2;
  datapin: number = 3;
  hx = new HX711(this.clockpin, this.datapin);

  // pints: number = 99; // HACK placeholder
  pints = setInterval(() => { this.calculatePints(); }, 60000);

  calculatePints() {
    this.hx.setOffset(8234508);
    this.hx.setScale(-20.9993);
    let grams: number = this.hx.getUnits();
    let approxPints = (grams - 4250) * 0.002;
    if (approxPints < 0) {
      approxPints = 0;
    }
    return approxPints;
  }

  @Output() addClick = new EventEmitter<number>();

  incrementSecretCounter() {
    // Adds one to click counter when neon sign (div id="flexbox-mainLogo") is clicked
    this.addClick.emit(1);
  }

  openBeer() {
    this.temp += 1;
  }

}
