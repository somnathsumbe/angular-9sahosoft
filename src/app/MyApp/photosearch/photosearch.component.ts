import { Component, OnInit } from "@angular/core";
import { PhotoService } from "./service/photo.service";

@Component({
  selector: "app-photosearch",
  templateUrl: "./photosearch.component.html",
  styleUrls: ["./photosearch.component.css"],
})
export class PhotosearchComponent implements OnInit {
  search:string;
  perPage:number=10;
  data:string[];
  constructor(private _photoService: PhotoService) {
    this._photoService.getdata(this.search, this.perPage);
  }

  ngOnInit(): void {}

  searchPhtos() {
    this._photoService.getdata(this.search, this.perPage).subscribe(
      (data) => {
        this.data = data.photos;
        console.log(this.data = data.photos);
      },
      (error) => {
        console.log("error" + error);
      }
    );
  }
}
