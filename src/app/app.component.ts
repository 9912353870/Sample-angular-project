import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fieldData: string = '';
  counter = 1;
  disable = false;
  even = false;

  getFieldData(val: any) {
    console.log('Input field value: ', val);
  }

  getCounter(type: any) {
    if (this.counter >= 1) {
      typeof type === 'string' && type === 'increment'
        ? this.counter++
        : this.counter - 1 > 0 && this.counter--;
      this.even = this.counter % 2 === 0;
    }
  }

  changeColor(limit: number = 3) {
    if (this.counter === limit) {
      this.counter = 1;
    } else {
      this.counter++;
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
