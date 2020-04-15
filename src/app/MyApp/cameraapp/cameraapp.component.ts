import { Component, ViewChild, OnInit } from "@angular/core";

@Component({
  selector: "app-cameraapp",
  templateUrl: "./cameraapp.component.html",
  styleUrls: ["./cameraapp.component.css"],
})
export class CameraappComponent implements OnInit {
  @ViewChild("vedio") vedio;
  blur: boolean;
  sapia: boolean;
  invert: boolean;
  flip: boolean;
  grayscale: boolean;
  dshow: boolean;

  constructor() {}
  ngOnInit() {}

  ngAfterViewInit() {
    const vedioElement: HTMLVideoElement = this.vedio.nativeElement;
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "user" } })
      .then((stream) => {
        vedioElement.srcObject = stream;
      });
  }

  //drop-shadow(16px 16px 20px red) invert(75%);
  setFilter() {
    let filter = "";
    let transform = "";
    if (this.blur) {
      filter += "blur(5px)";
      console.log(filter);
    }

    if (this.sapia) {
      filter = "sepia(100%)";
      console.log(filter);
    }

    if (this.invert) {
      filter += "invert(100%)";
    }

    if (this.flip) {
      transform += "scaleX(-1)";
    }

    if (this.grayscale) {
      filter += "grayscale(80%)";
    }
    if (this.dshow) {
      alert();
      filter += "drop-shadow(16px 16px 20px red) invert(75%)";
    }
    return {
      filter,
      transform,
    };
  }
}
