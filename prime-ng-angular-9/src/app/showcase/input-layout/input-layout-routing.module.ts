import { InputLayoutComponent } from "./input-layout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: "", component: InputLayoutComponent }]),
        
    ],
    exports: [RouterModule],
})
export class InputLayoutRoutingModule {}
