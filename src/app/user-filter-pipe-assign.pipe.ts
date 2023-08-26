import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilterPipeAssign'
})
export class UserFilterPipeAssignPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function(search) {
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
   
  }

}


//assignment 22/08/2023 custom filter pipe search by name