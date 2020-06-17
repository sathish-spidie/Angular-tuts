import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
	{
		path: "payment",
		loadChildren: () =>
			import("./module/sathish/sathish.module").then((m) => m.SathishModule),
	},
	{
		path: "",
		component: HomeComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
