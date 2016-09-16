System.register(['angular2/core', 'angular2/router', './stock-filter.pipe', './stock.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, stock_filter_pipe_1, stock_service_1;
    var StockListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (stock_filter_pipe_1_1) {
                stock_filter_pipe_1 = stock_filter_pipe_1_1;
            },
            function (stock_service_1_1) {
                stock_service_1 = stock_service_1_1;
            }],
        execute: function() {
            StockListComponent = (function () {
                function StockListComponent(_stockService) {
                    this._stockService = _stockService;
                    this.pageTitle = 'Featured Stocks...';
                    this.featuredStocks = ['AAON', 'AAPL', 'GOOG', 'IBM', 'MSFT'];
                    this.listFilter = '';
                }
                StockListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._stockService.getStocks(this.featuredStocks)
                        .subscribe(function (stocks) { return _this.stocks = stocks; }, function (error) { return _this.errorMessage = error; });
                };
                StockListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/stocks/stock-list.component.html',
                        styleUrls: ['app/stocks/stock-list.component.css'],
                        pipes: [stock_filter_pipe_1.StockFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [stock_service_1.StocksService])
                ], StockListComponent);
                return StockListComponent;
            }());
            exports_1("StockListComponent", StockListComponent);
        }
    }
});
//# sourceMappingURL=stock-list.component.js.map