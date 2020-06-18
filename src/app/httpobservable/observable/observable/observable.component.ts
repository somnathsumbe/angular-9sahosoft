import { Component, OnInit } from '@angular/core';
import { InMemHeroServiceService } from './service/in-mem-hero-service.service';
import { Books } from './interface/books';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  booksdatas: Books[];
  booksdatas$:Observable< Books[]>;
  constructor(private _InMemHeroServiceService: InMemHeroServiceService) { }

  ngOnInit(): void {
    this.getbooks();
    this.getbooksasync();
  }

  getbooks() {
    this._InMemHeroServiceService.getDetails().subscribe(res => {
      this.booksdatas = res;
      console.log(res);
    })
  }

  getbooksasync() {
    this.booksdatas$ = this._InMemHeroServiceService.getDetails();
  }

}
