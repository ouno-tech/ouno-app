import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ContributeComponent } from "./contribute.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

const routes: Routes = [
	{ path: "", redirectTo: "contribute" },
    { path: "contribute", component: ContributeComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ContributeRoutingModule { } 
