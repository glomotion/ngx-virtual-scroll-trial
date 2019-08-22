import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "virtual-scroll-test",
  templateUrl: "./virtual-scroll.component.html",
  styleUrls: ["./virtual-scroll.component.scss"]
})
export class VirtualScrollComponent implements OnInit {
  public items: any[] = [];
  public groupedItems: any[] = [];
  public viewPortItems: any;

  constructor() {
    for (let index = 0; index < 100; index++) {
      this.items.push(index);
    }
    this.groupedItems = groupArr(this.items, 4);
    this.groupedItems.splice(5, 0, "moo");
    this.groupedItems.splice(10, 0, "moo cow");
  }

  ngOnInit() {}

  public isArray(input) {
    return Array.isArray(input);
  }

  fetchMore(event) {
    // console.log("@@@@@@@@@@@@@@@@", event);
  }
}

function groupArr(data, n) {
  var group = [];
  for (var i = 0, j = 0; i < data.length; i++) {
    if (i >= n && i % n === 0) j++;
    group[j] = group[j] || [];
    group[j].push(data[i]);
  }
  return group;
}
