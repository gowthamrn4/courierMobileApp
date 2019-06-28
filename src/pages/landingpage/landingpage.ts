import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav,AlertController } from 'ionic-angular';
import { ListpagePage } from '../listpage/listpage';
import{User,DataService} from '../../app/data.service';
import { LoadingController } from 'ionic-angular';
import { AddFeedbackPage } from '../add-feedback/add-feedback';
import { AddressPage } from '../address/address';
import { AddlistPage } from '../addlist/addlist';
@IonicPage()
@Component({
  selector: 'page-landingpage',
  templateUrl: 'landingpage.html',
})
export class LandingpagePage implements OnInit {

// user:User={
//   name:'prabakar',
//   age:25,
//   city:'chennai'
// }
// userId=null;
loader:any
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav,
              private alrtCtrl:AlertController,
              public loadingCtrl: LoadingController,
              private service:DataService) {

                this.loader = this.loadingCtrl.create({
                  content: `Please Wait...`,
              }); 
  }

  alert(message){
    this.alrtCtrl.create({
      title:'Info',
      subTitle:message,
      buttons:['OK']
    }).present()
 }

  ngOnInit(){
  }
addUser(user){

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingpagePage');
  }
  openPage(page){
    switch(page){
    case 'addFeed':
    this.nav.setRoot(AddFeedbackPage);
    break;
  
    case 'list':
    this.nav.setRoot(ListpagePage);
    break;

    case 'profile':
    this.nav.setRoot(LandingpagePage);
    break;

    case 'address':
    this.nav.setRoot(AddressPage);
    break;

    case 'tracking':
    this.nav.setRoot(AddlistPage)
  }
  }
}
