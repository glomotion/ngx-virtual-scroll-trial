import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "gallery-img",
  templateUrl: "./gallery-img.component.html",
  styleUrls: ["./gallery-img.component.scss"]
})
export class GalleryImgComponent implements OnInit {
  @Input() item: any;
  public index;

  constructor() {}

  ngOnInit() {
    this.index = this.item % 4;
    console.log(this.index);
  }
}
