import {  PipeTransform, Pipe } from 'angular2/core';
import { IStock } from './stock';

@Pipe({
    name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

    transform(value: IStock[], args: string[]): IStock[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((stock: IStock) =>
            stock.symbol.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
