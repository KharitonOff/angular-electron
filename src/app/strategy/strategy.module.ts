import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategyRoutingModule } from './strategy-routing.module';
import { TradeModule } from 'app/trade/trade.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StrategyRoutingModule,
    TradeModule
  ]
})
export class StrategyModule { }
