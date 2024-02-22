import { Component, OnInit } from '@angular/core';

import { Routes } from "@angular/router";
import { defaultRoutes } from "../../routes/default.route";
import { testRoutes } from "../../routes/test.route";

import { navigationRoutes } from 'src/app/routes/navigation.route';
import { EnvironmentService } from 'src/app/services/environment.service';
import { SecurityService } from 'src/app/services/security.service';
import { pagesRoutes } from "../../routes/pages.route";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isHiddenIsProduction: boolean = this.environmentService.isProduction();
  isAuthenticated: boolean = this.securityService.isAuthenticated();

  defaultRoutes: Routes = defaultRoutes;
  publicRoutes: Routes = navigationRoutes;
  testRoutes: Routes = testRoutes;
  pagesRoutes: Routes = pagesRoutes;

  constructor(
    private environmentService: EnvironmentService,
    private securityService: SecurityService,
  ) { }

  ngOnInit(): void {
    this.onUpdateHandler();
  }

  onUpdateHandler() {
    this.isHiddenIsProduction = this.environmentService.isProduction();
    this.isAuthenticated = this.securityService.isAuthenticated();
  }

  onChangeHandler() {
    this.onUpdateHandler();
  }
}
