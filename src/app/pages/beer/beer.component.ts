import { Component, Output, OnInit } from '@angular/core';
import { setupTestingRouter } from '@angular/router/testing';
import { interval } from 'rxjs';
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
  beerState: any;
  vodkaState: any;
  clickCounter = 0;
  clicksForSecret = 3;

  data = {};

  constructor(private connector: FlaskConnectorService) {

  }

  ngOnInit(): void {
    this.getSensorData();
  }

  getSensorData() {
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
    setTimeout(this.getSensorData.bind(this), 1000);
  }

  openBeer() {
    this.connector.OpenBeer().then((retval) => {
      retval.subscribe((res) => {
        this.beerState = res;
      });
    });
  }

  openVodka() {
    this.connector.OpenVodka().then((retval) => {
      retval.subscribe((res) => {
        this.vodkaState = res;
      });
    });
  }

  closeBeer() {
    this.connector.CloseBeer().then((retval) => {
      retval.subscribe((res) => {
        this.beerState = res;
      });
    });
  }

  closeVodka() {
    this.connector.CloseVodka().then((retval) => {
      retval.subscribe((res) => {
        this.vodkaState = res;
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
}
