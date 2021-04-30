import { Injectable } from '@angular/core';
import { Board, Thermometer } from 'johnny-five';
var HX711 = require('@ataberkylmz/hx711');

@Injectable({
  providedIn: 'root'
})
export class SensorsService {
  private tempRead: number;
  private pintsRead: number;
  private hx: typeof HX711;
  constructor( ) {
    this.tempRead = 0;
    this.pintsRead = 0;

    // Temp read
    const board = new Board();
    board.on("ready", () => {
      // This requires OneWire support using ConfigurableFirmata
      const thermometer = new Thermometer({
        controller: "DS18B20",
        pin: 4
      });
      thermometer.on("change", () => {
        const { celsius } = thermometer;
        this.tempRead = celsius;
      });
    });

    // Weight read
    const clockpin: number = 2;
    const datapin: number = 3;
    this.hx = new HX711(clockpin, datapin);
    this.hx.setOffset(8234508);
    this.hx.setScale(-20.9993);
  }

  public getTemp() {
    return this.tempRead;
  }

  public getPints() {
    let grams: number = this.hx.getUnits();
    this.pintsRead = (grams - 4250) * 0.002;
    if (this.pintsRead < 0) {
      this.pintsRead = 0;
    }
    return this.pintsRead;
  }
}
