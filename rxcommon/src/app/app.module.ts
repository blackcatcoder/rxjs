import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './service/ProductService';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { Sample4Component } from './sample4/sample4.component';
import { Sample5Component } from './sample5/sample5.component';
import { Sample6Component } from './sample6/sample6.component';
import { Sample7Component } from './sample7/sample7.component';
import { Sample8Component } from './sample8/sample8.component';
import { Sample9Component } from './sample9/sample9.component';
import { Sample10Component } from './sample10/sample10.component';
import { Product2Service } from './sample2/service/Product2Service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    Sample1Component,
    Sample2Component,
    Sample3Component,
    Sample4Component,
    Sample5Component,
    Sample6Component,
    Sample7Component,
    Sample8Component,
    Sample9Component,
    Sample10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProductService, Product2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
