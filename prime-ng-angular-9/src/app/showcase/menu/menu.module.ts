import { MegaMenuDemo } from "./../components/megamenu/megamenudemo";
import { MenuComponent } from "./menu.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MenuRoutingModule } from "./menu-routing.module";
import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { MenubarDemo } from "../components/menubar/menubardemo";
import { MegaMenuModule } from "primeng/megamenu";

@NgModule({
    declarations: [MenuComponent, MenubarDemo, MegaMenuDemo],
    imports: [
        CommonModule,
        MenuRoutingModule,
        CommonModule,
        MenubarModule,
        InputTextModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule,
        MegaMenuModule,
    ],
})
export class MenuModule {}
