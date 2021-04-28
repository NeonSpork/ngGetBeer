import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {

  temp=0;
  pints=99;
  
  constructor() { }

  ngOnInit(): void {
  }

}
