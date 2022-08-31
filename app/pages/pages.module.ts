import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { CryptoComponent } from './crypto/crypto.component';
import { StocksComponent } from './stocks/stocks.component';

@NgModule({
  declarations: [
    CryptoComponent,
    StocksComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
  ]
})
export class PagesModule { }
