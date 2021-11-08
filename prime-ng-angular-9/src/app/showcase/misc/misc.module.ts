import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MiscRoutingModule } from "./misc-routing.module";
import { MiscComponent } from "./misc.component";
import { ProgressBarModule } from "primeng/progressbar";
import { ToastModule } from "primeng/toast";
import { TabViewModule } from "primeng/tabview";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { ProgressBarDemo } from "../components/progressbar/progressbardemo";

@NgModule({
    declarations: [MiscComponent,ProgressBarDemo],
    imports: [
        CommonModule,
        MiscRoutingModule,
        ProgressBarModule,
        ToastModule,
        TabViewModule,
        CodeHighlighterModule,
    ],
})
export class MiscModule {}
