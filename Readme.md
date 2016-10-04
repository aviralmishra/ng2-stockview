# ng2-stockview

StockView is a responsive and interactive finance application built using Angular 2, HTML, CSS and Bootstrap.

It allows the user to:

1. Search stock(s) and view the market data from Yahoo Finance.
2. Automatically add searched stocks to their featured list
3. Remove stocks from their featured list
4. View and analyse stock's past data through graphs and charts based on past data


## Instructions to run the application

Run the following commands to run the application:

1. git clone https://github.com/aviralmishra/ng2-stockview.git
2. cd ng2-stockview
3. npm start


## Note

'app/config/app.config.ts' file is not added to the repo as it contains sensitive information.

You will need to provide this file to get the application running. Here is the template for the file:

```
import { Injectable } from 'angular2/core';

@Injectable()
export class Configuration {
  public API_URL: string = '<API_URL>';

  public HEADER_MASHAPE_KEY: string = '<X-Mashape-Key Header>';
  public HEADER_ACCEPT_KEY: string = 'Accept Header e.g. application/json';

  public QUERY_KEY_TEXT = '<Query Parameter Key (If any)>';
}

```
