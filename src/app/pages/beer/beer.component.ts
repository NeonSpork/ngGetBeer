import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Board, Thermometer } from 'johnny-five';

const board = new Board();

board.on("ready", () => {
  // This requires OneWire support using ConfigurableFirmata
  const thermometer = new Thermometer({
    controller: "DS18B20",
    pin: 2
  });

  thermometer.on("change", () => {
    const { address, celsius, fahrenheit, kelvin } = thermometer;
    console.log(`Thermometer at address: 0x${address.toString(16)}`);
    console.log("  celsius      : ", celsius);
    console.log("  fahrenheit   : ", fahrenheit);
    console.log("  kelvin       : ", kelvin);
    console.log("--------------------------------------");
  });
});

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  temp = board.thermometer.celsius;
  pints = 99;

  constructor() { }

  ngOnInit(): void {
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
