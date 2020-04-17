import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

transform(value: unknown, ...args: unknown[]): unknown {
let newdate=new Date();
var  gethour=newdate.getHours();
if ( gethour < 12 ) 
{
   return "Good Morning!"
}
else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
if ( gethour >= 12 && gethour <= 17 )
{
   return "Good Afternoon!"
}
else  /* the hour is after 5pm, so it is between 6pm and midnight */
if ( gethour > 17 && gethour <= 24 )
{
   return "Good Evening!"
}
else  /* the hour is not between 0 and 24, so something is wrong */
{
   return 'm not sure what time it is!'
}
return null;
}

}
