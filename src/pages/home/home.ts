import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {LandingpagePage} from '../landingpage/landingpage'
import {ListpagePage} from '../listpage/listpage'
import {LoginPage} from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:any;
  email:any;
  public rootPage:any
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController) {
    var name = JSON.parse(localStorage.getItem("userdetails"));
    this.username = name.user.name;
    this.email = name.user.email;
    console.log(this.username) ;
  }

  openPage(page){
    switch(page){
    case 'dashboard':
    this.nav.setRoot(LandingpagePage);
    break;
  
    case 'list':
    this.nav.setRoot(ListpagePage);
    break;

    default:
    this.nav.setRoot(LandingpagePage);
    break;
  }
  }
logout(){
  localStorage.removeItem('currentUser');
  localStorage.removeItem('userdetails');
  this.navCtrl.push(LoginPage);
}
  ionViewDidLoad(){
    this.rootPage = LandingpagePage;
   }
}
