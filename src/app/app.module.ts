import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericModuleModule } from './generic-module/generic-module.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { GenericHeaderComponent } from './generic-header/generic-header.component';
import { InlineStyleCompComponent } from './inline-style-comp/inline-style-comp.component';
import { InlineTemplateCompComponent } from './inline-template-comp/inline-template-comp.component';
import { InlineTemplateAndstyleComponentComponent } from './inline-template-andstyle-component/inline-template-andstyle-component.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
    GenericModuleModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    GenericHeaderComponent,
    InlineStyleCompComponent,
    InlineTemplateCompComponent,
    InlineTemplateAndstyleComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
