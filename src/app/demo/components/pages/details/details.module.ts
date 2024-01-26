import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { DetailsComponent } from "./details.component";
import { DetailsRoutingModule } from "./details-routing.module";

@NgModule({
    imports: [
        CardModule,
        DetailsRoutingModule
    ],
    declarations: [DetailsComponent]
})
export class DetailsModule { }