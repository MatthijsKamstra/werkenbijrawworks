import { Routes } from "@angular/router";
import { ActiePageComponent } from "../pages/actie-page/actie-page.component";

export const actieRoutes: Routes = [
	{ path: "actie", title: "Actie", component: ActiePageComponent },
	{ path: "actie/:id", title: "Actie", component: ActiePageComponent },
];
