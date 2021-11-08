import { FloatLabelComponent } from "./float-label.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: "", component: FloatLabelComponent }]),
    ],
    exports: [RouterModule],
})
export class FloatLabelRoutingModule {}
