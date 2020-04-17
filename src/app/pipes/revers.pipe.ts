import { Pipe, PipeTransform } from '@angular/core';
import { reverse } from 'dns';

@Pipe({
name: 'revers'
})
export class ReversPipe implements PipeTransform {

transform(value: string, ...args: any[]): any {
var rstring:string='';
for(var i=value.length-1;i>=0;i--){
rstring+=value.charAt(i);
}
return rstring;
}

}
