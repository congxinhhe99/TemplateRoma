import { CarouselDemo } from "./../components/carousel/carouseldemo";
import { MediaComponent } from "./media.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { TabViewModule } from "primeng/tabview";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { MediaRoutingModule } from "./media-routing.module";

@NgModule({
    declarations: [MediaComponent, CarouselDemo],
    imports: [
        CommonModule,
        CommonModule,
        CarouselModule,
        ButtonModule,
        ToastModule,
        TabViewModule,
        CodeHighlighterModule,
        MediaRoutingModule
    ],
})
export class MediaModule {}
