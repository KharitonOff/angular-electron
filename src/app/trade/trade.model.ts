export enum ETradeType {
  STK = 'STK',
  OPT = 'OPT',
  CASH = 'CASH'
}

export enum ETradeSide {
  SELL = 'SELL',
  BUY = 'BUY'
}

export enum EOptionType {
  P = 'PUT',
  C = 'CALL'
}

export enum EOrderType {
  MKT = 'MKT',
  LMT = 'LMT',
  STP = 'STP',
  STP_LIMIT = 'STP_LIMIT'
}

export interface ITrade {
  id: string
  price: number
  type: ETradeType
  amount: number
  side: ETradeSide
  createdAt: Date
  closedAt: Date
  expiresAt?: Date
  ticker: string
  optType?: EOptionType
}

export const TradeStorageSchema = {
  id: {
    type: 'string'
  },
  price: {
    type: 'number',
    minimum: 0,
    default: 0.01
  },
  // type: {
  //   type: ETradeType,
  // },
  // amount: {
  //   type: 'number',
  //   minimum: 1
  // },
  // side: {
  //   type: ETradeSide,
  // },
  // createdAt: {
  //   type: Date,
  // },
  // closedAt: {
  //   type: Date,
  // },
  // expiresAt: {
  //   type: Date,
  // },
  ticker: {
    type: 'string',
  },
  // optType: {
  //   type: EOptionType,
  // }
}