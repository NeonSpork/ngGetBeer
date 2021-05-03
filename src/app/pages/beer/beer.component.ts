import { Component, Output, OnInit } from '@angular/core';
import { FlaskConnectorService } from 'src/app/shared/flask-connector.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
})
export class BeerComponent implements OnInit {
  secretActive = false;
  temp: any;
  pints: any;
  clickCounter = 0;
  clicksForSecret = 3;

  constructor(private connector: FlaskConnectorService) {}

  ngOnInit(): void {
    this.connector.GetTemp().then((retval) => {
      retval.subscribe((res) => {        
        this.temp = res;
      });
    });
    this.connector.GetPints().then((retval) => {
      retval.subscribe((res) => {
        this.pints = res;
      });
    });
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
