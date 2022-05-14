import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate',
})
export class FilterDatePipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item) => item.date.indexOf(filter) !== -1);
  }
}
