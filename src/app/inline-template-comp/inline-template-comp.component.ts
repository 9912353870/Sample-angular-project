import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template-comp',
  template: `
    <div class="custom">
    <!-- ng g c inline-template-comp --inline-template -->
      inline-template-comp works!
    </div>
  `,
  styleUrls: ['./inline-template-comp.component.css']
})
export class InlineTemplateCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
