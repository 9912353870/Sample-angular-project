import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-style-comp',
  templateUrl: './inline-style-comp.component.html',
  styles: [
    `
      .custom {
        color: red;
      }
    `,
  ],
})
export class InlineStyleCompComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
