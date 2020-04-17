import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'mrmiss'
})
export class MrmissPipe implements PipeTransform {

transform(value: string, gender: string): string {
 return gender.toLowerCase()=='male'?'Mr.'+ value:'Miss.'+value;

}

}
