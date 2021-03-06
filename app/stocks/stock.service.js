System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', "../config/app.config"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, app_config_1;
    var StocksService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            StocksService = (function () {
                function StocksService(_http, _configuration) {
                    this._http = _http;
                    this._configuration = _configuration;
                    this._stocksUrl = _configuration.API_URL;
                    this._headers = new http_1.Headers();
                    this._headers.append('X-Mashape-Key', _configuration.HEADER_MASHAPE_KEY);
                    this._headers.append('Accept', _configuration.HEADER_ACCEPT_KEY);
                    this._headers.append('Access-Control-Allow-Origin', "*");
                    this._queryKey = _configuration.QUERY_KEY_TEXT;
                }
                StocksService.prototype.getStocks = function (symbols) {
                    var query = "&" + this._queryKey + "=" + symbols.join(',');
                    return this._http.get(this._stocksUrl + query)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                StocksService.prototype.getStock = function (symbol) {
                    return this.getStocks([symbol])
                        .map(function (stocks) { return stocks.find(function (s) { return s.symbol === symbol; }); });
                };
                StocksService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                StocksService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, app_config_1.Configuration])
                ], StocksService);
                return StocksService;
            }());
            exports_1("StocksService", StocksService);
        }
    }
});
//# sourceMappingURL=stock.service.js.map