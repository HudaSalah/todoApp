import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGroups'
})
export class FilterGroupsPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    console.log('items groups',items)
    console.log('filter groups',filter)
    if (!items || !filter) {
        return items;
    }
    return items.filter(item => filter.indexOf(item.id) !== -1);
}
}
