import { Component, OnInit, Output, EventEmitter } from '@angular/core';
var rpio = require('rpio');
import { Board, Thermometer } from 'johnny-five';
var HX711 = require('@ataberkylmz/hx711');

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {

  // Temperature sensor
  temp: number = 0;

  // Load sensor
  clockpin: number = 2;
  datapin: number = 3;
  hx = new HX711(this.clockpin, this.datapin);

  // pints: number = 99; // HACK placeholder
  pints = setInterval(() => { this.calculatePints(); }, 60000);

  @Output() resetSecret = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

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

  openVodka() {

  }

  backToBeer() {
    this.resetSecret.emit(false);
  }

}
