import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.css'],
})
export class GenericButtonComponent implements OnInit {
  constructor() {}
  customText = 'CLICK ME';
  count = 0;
  incrementBy = 1;
  ngOnInit(): void {}
  getLogDetails() {
    this.count++;
    console.log(`Button: Click event ${this.count}`);
  }
}
