import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './component/home/hero/hero.component';
import { AboutComponent } from './component/home/about/about.component';
import { CakecardsComponent } from './component/home/cakecards/cakecards.component';
import { CakecardshowComponent } from './component/home/cakecardshow/cakecardshow.component';
import { MapComponent } from './component/home/map/map.component';
import { FooterComponent } from './common/footer/footer.component';
import { CakeindividualComponent } from './pages/cakeindividual/cakeindividual.component';
import { LoginComponent } from './pages/login/login.component';
import { StatsComponent } from './component/home/stats/stats.component';
import { TrustpointsComponent } from './component/home/trustpoints/trustpoints.component';
import { OfferComponent } from './component/home/offer/offer.component';
import { AnimateValueDirective } from './directive/animate-value.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeroComponent,
    AboutComponent,
    CakecardsComponent,
    CakecardshowComponent,
    MapComponent,
    FooterComponent,
    CakeindividualComponent,
    LoginComponent,
    StatsComponent,
    TrustpointsComponent,
    OfferComponent,
    AnimateValueDirective,

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
