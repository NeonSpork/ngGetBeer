import {
  Component,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy,
  Input,
} from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import * as rpio from "rpio";
import { environment } from 'src/environments/environment';
// var rpio = require('rpio');

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss'],
})
export class SecretComponent implements AfterViewInit, OnDestroy {
  @Output() resetSecret = new EventEmitter<boolean>();
  @Input() pints=0;
  @Input() temp=0;

  vodkaPin = environment.vodkaPin;
  constructor() {
    rpio.init({ mock: 'raspi-3' });
  }

  ngAfterViewInit(): void {
    rpio.open(this.vodkaPin, rpio.OUTPUT, rpio.LOW);
  }

  ngOnDestroy() {
    rpio.exit();
  }

  //TODO add input to grab this from Sensor service
  // temp = 0;
  // Load sensor

  @Output() addClick = new EventEmitter<number>();

  incrementSecretCounter() {
    // Adds one to click counter when neon sign (div id="flexbox-mainLogo") is clicked
    this.addClick.emit(1);
  }

  // TODO fix this to open beer valve for 10s then close it with:
  // rpio.write(this.vodkaPin, rpio.LOW)
  beerValve = interval(10000)
    .pipe(takeWhile(() => !stop))
    .subscribe(() => {
      this.openVodka();
    });

  backToBeer() {
    this.resetSecret.emit(false);
  }

  openVodka() {
    rpio.write(this.vodkaPin, rpio.HIGH);
  }
}
