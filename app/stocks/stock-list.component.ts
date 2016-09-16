import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IStock } from './stock';
import { StockFilterPipe } from './stock-filter.pipe';
import { StocksService } from './stock.service';

@Component({
  templateUrl: 'app/stocks/stock-list.component.html',
  styleUrls: ['app/stocks/stock-list.component.css'],
  pipes: [StockFilterPipe],
  directives: [ROUTER_DIRECTIVES]
})
export class StockListComponent implements OnInit {
  pageTitle: string = 'Featured Stocks...';
  featuredStocks: Array<string> = ['AAON', 'AAPL', 'GOOG', 'IBM', 'MSFT'];
  listFilter: string = '';
  errorMessage: string;
  stocks: IStock[];

  constructor(private _stockService: StocksService) {
  }

  ngOnInit(): void {
    this._stockService.getStocks(this.featuredStocks)
      .subscribe(
      stocks => this.stocks = stocks,
      error => this.errorMessage = <any>error);
  }
}
