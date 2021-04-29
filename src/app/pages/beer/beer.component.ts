import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  temp=0;
  pints=99;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() addClick = new EventEmitter<number>();

  incrementSecretCounter() {
    // Adds one to click counter when neon sign (div id="flexbox-mainLogo") is clicked
    this.addClick.emit(1);
  }

  openBeer() {
    this.temp+=1;
  }

}
