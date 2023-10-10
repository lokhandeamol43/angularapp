import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false          //for Impure pipe impletation
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTearm: any): any {
    return value.filter(function(search) {
      return search.productName.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    })
   
  }

}


//pipe default behaviour is pure pipe