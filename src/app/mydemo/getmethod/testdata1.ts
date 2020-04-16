
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb(){
        let bookdetails=[
           {id : 101 , name:"Angular by Sohosoft" ,category:"Angular"},
           {id : 102 , name:"Angular by Sohosoft" ,category:"Javascript"},
           {id : 103 , name:"Angular by Sohosoft" ,category:"Advance Javascript"}
   ]
   return {books:bookdetails}
    }
}



