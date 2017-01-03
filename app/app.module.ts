import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {NinexNineComponent} from './ninexnine.container.component/ninexnine.container.component';
import {ProductComponent} from './ninexnine.container.component/product.component';
import {QuotientComponent} from './ninexnine.container.component/quotient.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, NinexNineComponent, ProductComponent, QuotientComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
