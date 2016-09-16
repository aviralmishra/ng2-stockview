import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IStock } from './stock';

@Injectable()
export class StocksService {
  private _stocksUrl = 'api/stocks/stocks.json';

  constructor(private _http: Http) { }

  getStocks(): Observable<IStock[]> {
    return this._http.get(this._stocksUrl)
      .map((response: Response) => <IStock[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getStock(symbol: string): Observable<IStock> {
    return this.getStocks()
      .map((stocks: IStock[]) => stocks.find(s => s.symbol === symbol));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
