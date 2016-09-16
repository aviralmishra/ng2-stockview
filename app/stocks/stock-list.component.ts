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
  pageTitle: string = 'Stock List';
  listFilter: string = '';
  errorMessage: string;
  stocks: IStock[];

  constructor(private _stockService: StocksService) {
  }

  ngOnInit(): void {
    this._stockService.getStocks()
      .subscribe(
      stocks => this.stocks = stocks,
      error => this.errorMessage = <any>error);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Stock List: ' + message;
  }
}
