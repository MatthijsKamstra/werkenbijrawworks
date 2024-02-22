import { Routes } from "@angular/router";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { UitlegPageComponent } from "../pages/uitleg-page/uitleg-page.component";

export const defaultRoutes: Routes = [
	{ path: "", pathMatch: "full", component: UitlegPageComponent },
	{ path: "home", title: "Home", component: HomePageComponent },
];
