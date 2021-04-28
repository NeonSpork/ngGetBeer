import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {

  temp=0;
  pints=99;
  @Output() resetSecret = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  openVodka() {
    this.pints-=1;
  }

  backToBeer() {
    this.resetSecret.emit(false);
  }

}
