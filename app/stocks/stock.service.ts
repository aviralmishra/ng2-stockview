import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Configuration } from "../config/app.config";
import { IStock } from './stock';

@Injectable()
export class StocksService {
  private _stocksUrl: string;
  private _headers: Headers;
  private _queryKey: string;

  constructor(private _http: Http, private _configuration: Configuration) {
    this._stocksUrl = _configuration.API_URL;

    this._headers = new Headers();
    this._headers.append('X-Mashape-Key', _configuration.HEADER_MASHAPE_KEY);
    this._headers.append('Accept', _configuration.HEADER_ACCEPT_KEY);
    this._headers.append('Access-Control-Allow-Origin', "*");

    this._queryKey = _configuration.QUERY_KEY_TEXT;
  }

  getStocks(symbols: string[]): Observable<IStock[]> {
    let query = "&" + this._queryKey + "=" + symbols.join(',');

    return this._http.get(this._stocksUrl + query)
      .map((response: Response) => <IStock[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getStock(symbol: string): Observable<IStock> {
    return this.getStocks([symbol])
      .map((stocks: IStock[]) => stocks.find(s => s.symbol === symbol));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
