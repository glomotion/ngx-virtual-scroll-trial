import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "virtual-scroll-test",
  templateUrl: "./virtual-scroll.component.html",
  styleUrls: ["./virtual-scroll.component.scss"]
})
export class VirtualScrollComponent implements OnInit {
  public items: any[] = [];
  public viewPortItems: any;

  constructor() {
    for (let index = 0; index < 100; index++) {
      this.items.push(index);
    }

    this.items.splice(10, 0, "moo");
    this.items.splice(17, 0, "moo cow");
  }

  ngOnInit() {}

  public isNumber(input) {
    return typeof input === "number";
  }

  fetchMore(event) {
    // console.log("@@@@@@@@@@@@@@@@", event);
  }
}
