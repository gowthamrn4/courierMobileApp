import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DataService} from './data.service';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LandingpagePage} from '../pages/landingpage/landingpage';
import {ListpagePage} from '../pages/listpage/listpage'
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AddFeedbackPage } from '../pages/add-feedback/add-feedback';
import {HttpModule} from '@angular/http';
import { AddressPage } from '../pages/address/address';
import { AddCourierPage } from '../pages/add-courier/add-courier';
import { AddlistPage } from '../pages/addlist/addlist';
import { PaymentPage } from '../pages/payment/payment';
import { NotificationPage } from '../pages/notification/notification';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    LandingpagePage,
    ListpagePage,
    AddFeedbackPage,
    RegisterPage,
    AddressPage,
    AddCourierPage,
    AddlistPage,
    PaymentPage,
    NotificationPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingpagePage,
    ListpagePage,
    LoginPage,
    AddFeedbackPage,
    RegisterPage,
    AddressPage,
    AddCourierPage,
    AddlistPage,
    PaymentPage,
    NotificationPage
  ],
  providers: [
    StatusBar,
    DataService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
