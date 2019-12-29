import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(roles: any, searchQuery= ''): any {
    return roles.filter((e) => {
      return e.name.includes(searchQuery);
    });
  }

}
