import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: ':name', component: DetailsComponent }
	])],
	exports: [RouterModule]
})
export class DetailsRoutingModule { }