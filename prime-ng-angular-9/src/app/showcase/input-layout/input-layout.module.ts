import { FormsModule } from "@angular/forms";
import { InputLayoutRoutingModule } from "./input-layout-routing.module";
import { InputLayoutComponent } from "./input-layout.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextDemo } from "../components/inputtext/inputtextdemo";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { RadioButtonDemo } from "../components/radiobutton/radiobuttondemo";
import { RadioButtonModule } from "primeng/radiobutton";

@NgModule({
    declarations: [InputLayoutComponent, InputTextDemo, RadioButtonDemo],
    imports: [
        CommonModule,
        InputLayoutRoutingModule,
        CommonModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule,
        FormsModule,
        CommonModule,
        FormsModule,
        TabViewModule,
        CodeHighlighterModule,
        RadioButtonModule
    ],
})
export class InputLayoutModule {}
