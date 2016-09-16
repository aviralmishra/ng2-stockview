export interface IStock {
  symbol: string;
  ask: number;
  bid: number;
  last_trade_date: Date;
  low: number;
  high: string;
  low_52_weeks: number;
  high_52_weeks: number;
  volume: number;
  open: number;
  close: number;
}

