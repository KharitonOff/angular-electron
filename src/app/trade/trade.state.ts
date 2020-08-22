import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITrade, TradeStorageSchema } from 'app/trade/trade.model';
import { StorageService } from 'app/shared/services';

@Injectable({
  providedIn: 'root'
})
export class TradeState {
  private trade$ = new BehaviorSubject<ITrade>(null);
  private tradeStore = new StorageService(TradeStorageSchema);
  constructor() { }

  getTrade$(tradeId: ITrade['id']) {
    return this.trade$.asObservable();
  }

  setTrade(trade: ITrade): void {
    this.trade$.next(trade);
    this.tradeStore.setData(trade);
  }
}
