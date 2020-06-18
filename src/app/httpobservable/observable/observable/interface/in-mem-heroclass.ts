import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Books } from './books';

export class InMemHeroclass implements InMemoryDbService {
    createDb() {
        let BookDetails:Books[] = [
          { id: 1, name: 'Windstorm',category:"Angular7" },
          { id: 2, name: 'Bombasto',category:"Reactjs"},
          { id: 3, name: 'Magneta',category:"TypeScript" },
          { id: 4, name: 'Tornado',category:"javascript" }
        ];
        return {BookDetails};
      }
}
