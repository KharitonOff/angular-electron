import { TestBed } from '@angular/core/testing';

import { StrategyState } from './strategy.state';

describe('StrategyState', () => {
  let service: StrategyState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrategyState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
