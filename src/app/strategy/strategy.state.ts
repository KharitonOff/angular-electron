import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITrade } from 'app/trade/trade.model';

@Injectable({
  providedIn: 'root'
})
export class StrategyState {
  private trades$ = new BehaviorSubject<ITrade[]>(null);
  constructor() { }

  getTrades$() {
    return this.trades$.asObservable();
  }

  addTrade(trade: ITrade) {
    const currentValue = this.trades$.getValue();
    this.trades$.next([...currentValue, trade]);
  }

  updateTrade(updatedTrade: ITrade) {
    const trades = this.trades$.getValue();
    const indexOfUpdated = trades.findIndex(trade => trade.id === updatedTrade.id);
    trades[indexOfUpdated] = updatedTrade;
    this.trades$.next([...trades]);
  }

  removeTrade(tradeToRemove: ITrade) {
    const currentValue = this.trades$.getValue();
    this.trades$.next(currentValue.filter(trade => trade.id !== tradeToRemove.id));
  }
}
