System.register(['angular2/core', 'angular2/router', './stock.service'], function(exports_1, context_1) {
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
    var core_1, router_1, stock_service_1;
    var StockDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (stock_service_1_1) {
                stock_service_1 = stock_service_1_1;
            }],
        execute: function() {
            StockDetailComponent = (function () {
                function StockDetailComponent(_stockService, _router, _routeParams) {
                    this._stockService = _stockService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.pageTitle = 'Stock Detail';
                }
                StockDetailComponent.prototype.ngOnInit = function () {
                    if (!this.stock) {
                        var id = this._routeParams.get('id');
                        this.getStock(id);
                    }
                };
                StockDetailComponent.prototype.getStock = function (id) {
                    var _this = this;
                    this._stockService.getStock(id)
                        .subscribe(function (stock) { return _this.stock = stock; }, function (error) { return _this.errorMessage = error; });
                };
                StockDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['Stocks']);
                };
                StockDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/stocks/stock-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [stock_service_1.StocksService, router_1.Router, router_1.RouteParams])
                ], StockDetailComponent);
                return StockDetailComponent;
            }());
            exports_1("StockDetailComponent", StockDetailComponent);
        }
    }
});
//# sourceMappingURL=stock-detail.component.js.map