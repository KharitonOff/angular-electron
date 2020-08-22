import { Component, OnInit } from '@angular/core';
import { StrategyState } from './strategy.state';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit {

  constructor(
    private strategyState: StrategyState
  ) { }

  ngOnInit(): void {
  }

  createTrade(trade) {
    this.strategyState.addTrade(trade);
    window.alert('Your trade has been added to the strategy!');
  }
}
