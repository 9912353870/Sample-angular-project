import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template-andstyle-component',
  template: `
    <p class="custom">
      inline-template-andstyle-component works!
    </p>
  `,
  styles: [
    `.custom{
      color: blue;
    }`
  ]
})
export class InlineTemplateAndstyleComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
