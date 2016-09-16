import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IStock } from './stock';
import { StocksService } from './stock.service';

@Component({
    templateUrl: 'app/stocks/stock-detail.component.html'
})
export class StockDetailComponent implements OnInit {
    pageTitle: string = 'Stock Detail';
    stock: IStock;
    errorMessage: string;

    constructor(private _stockService: StocksService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.stock) {
            let id = this._routeParams.get('id');
            this.getStock(id);
        }
    }

    getStock(id: string) {
        this._stockService.getStock(id)
            .subscribe(
            stock => this.stock = stock,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Stocks']);
    }

}
