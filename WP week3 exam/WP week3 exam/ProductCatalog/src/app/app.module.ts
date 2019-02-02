import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './main/product/product.component';
import { DataService } from './data.service';
import {DatasetService} from './dataset.service';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService, DatasetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
