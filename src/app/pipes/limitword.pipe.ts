import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitword'
})
export class LimitwordPipe implements PipeTransform {

  transform(value:any, limit:number=20, symbol:string="..."): unknown {
    debugger;
    return value.slice(0,limit)+symbol;
  }

}
