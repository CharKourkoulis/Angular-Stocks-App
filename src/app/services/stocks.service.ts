import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR', 'HPQ', 'IBM', 'CRM', 'JNPR', 'TWLO', 'HUBS', 'VEEV' ];
const service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  company: string;
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
  }

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) { }

    get() {
    return stocks.slice();
    }

    add(stock) {
    stocks.push(stock);
    return this.get();
    }

    remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
    }

    load(symbols) {
        if (symbols) {
        return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
        }
    }

}
