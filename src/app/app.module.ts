import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroVisualComponent } from './components/hero-visual/hero-visual.component';
import { LoginSimpleComponent } from './components/login-simple/login-simple.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { Btn2topComponent } from './elements/btn2top/btn2top.component';
import { IconsComponent } from './elements/icons/icons.component';
import { LoginDropdownComponent } from './elements/login-dropdown/login-dropdown.component';
import { ProfileDropdownComponent } from './elements/profile-dropdown/profile-dropdown.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ActiePageComponent } from './pages/actie-page/actie-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ColorsComponent } from './pages/styleguide/colors/colors.component';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { UitlegPageComponent } from './pages/uitleg-page/uitleg-page.component';
import { WipPageComponent } from './pages/wip-page/wip-page.component';
import { DebugDirective } from './shared/directives/debug.directive';

@NgModule({
  declarations: [
    AboutPageComponent,
    AppComponent,
    Btn2topComponent,
    ColorsComponent,
    CtaComponent,
    DebugDirective,
    FooterComponent,
    HeroVisualComponent,
    HomePageComponent,
    IconsComponent,
    IconsComponent,
    LoginComponent,
    LoginDropdownComponent,
    LoginPageComponent,
    LoginSimpleComponent,
    LogoutPageComponent,
    NavComponent,
    NotFoundPageComponent,
    ProfileDropdownComponent,
    SettingsPageComponent,
    StyleguideComponent,
    UitlegPageComponent,
    WipPageComponent,
    ActiePageComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
