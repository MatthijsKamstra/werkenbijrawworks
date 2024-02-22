import { Routes } from "@angular/router";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";

export const navigationRoutes: Routes = [
	{ path: "home", title: "Home", component: HomePageComponent },
	{ path: "about", title: "About", component: AboutPageComponent },
];
