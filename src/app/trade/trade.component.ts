import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TradeState } from './trade.state';
import { ITrade, ETradeType, ETradeSide, EOptionType } from './trade.model';
import * as uuid from 'uuid';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  trade;
  tradeForm;

  @Input() tradeId: ITrade['id']
  constructor(
    private tradeState: TradeState,
    private formBuilder: FormBuilder
  ) {
    this.tradeForm = this.formBuilder.group({
      price: 0,
      type: ETradeType.STK,
      amount: 1,
      side: ETradeSide.SELL,
      createdAt: new Date(),
      closedAt: new Date(),
      ticker: ''
    })
  }

  ngOnInit(): void {
    this.trade = this.tradeState.getTrade$(this.tradeId)
  }

  onSubmit(tradeData: ITrade) {
    tradeData.id = tradeData.id ? tradeData.id : uuid.v4();
    this.tradeState.setTrade(tradeData);
    // Process checkout data here
    this.trade = this.tradeState.getTrade$(null);
    this.tradeForm.reset();

    console.warn('Your trade has been submitted', tradeData);
  }
}
