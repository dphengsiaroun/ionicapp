import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ServicesPage } from '../pages/services/services';
import { RestaurantMenuPage, StarterContentPage, DishesContentPage, DessertsContentPage } from '../pages/restaurantMenu/restaurantMenu';
import { DrinkMenuPage, SoftsContentPage, HotsContentPage, CocktailsContentPage, AlcoolsContentPage } from '../pages/drinkMenu/drinkMenu';
import { WineMenuPage, RougesContentPage, BlancsContentPage, AuVerresContentPage, RosesContentPage } from '../pages/wineMenu/wineMenu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		ListPage,
		LoginPage,
		RegisterPage,
		ServicesPage,
		RestaurantMenuPage,
		StarterContentPage,
		DishesContentPage,
		DessertsContentPage,
		DrinkMenuPage,
		SoftsContentPage,
		HotsContentPage,
		CocktailsContentPage,
		AlcoolsContentPage,
		WineMenuPage,
		RougesContentPage,
		BlancsContentPage,
		RosesContentPage,
		AuVerresContentPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		ListPage,
		LoginPage,
		RegisterPage,
		ServicesPage,
		RestaurantMenuPage,
		StarterContentPage,
		DishesContentPage,
		DessertsContentPage,
		DrinkMenuPage,
		SoftsContentPage,
		HotsContentPage,
		CocktailsContentPage,
		AlcoolsContentPage,
		WineMenuPage,
		RougesContentPage,
		BlancsContentPage,
		RosesContentPage,
		AuVerresContentPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
