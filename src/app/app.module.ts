import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { VirtualScrollComponent } from "./virtual-scroll/virtual-scroll.component";
import { GalleryImgComponent } from "./virtual-scroll/gallery-img/gallery-img.component";
import { VirtualScrollerModule } from "ngx-virtual-scroller";

@NgModule({
  declarations: [AppComponent, VirtualScrollComponent, GalleryImgComponent],
  imports: [BrowserModule, VirtualScrollerModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
