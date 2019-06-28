import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav,AlertController } from 'ionic-angular';
import{DataService} from '../../app/data.service';
import { LandingpagePage } from '../landingpage/landingpage';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ListpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listpage',
  templateUrl: 'listpage.html',
})
export class ListpagePage implements OnInit {
loader:any
list:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private service:DataService,
              private alrtCtrl:AlertController,
              public loadingCtrl: LoadingController,
              private nav:Nav
              ) {
                this.loader = this.loadingCtrl.create({
                  content: `Please Wait...`,
              }); 
  }
  ngOnInit(){
   
  }

  ionViewDidLoad() { 
    var name = JSON.parse(localStorage.getItem("userdetails"));
    let data = {
      'userId':name.user._id,
      'email':name.user.email
    }
    console.log(data)
    this.service.requestGetService(data).subscribe(res=>{
       this.list=res.result;
      console.log(res)
    })
   }

  goToBack(){
    this.navCtrl.push(HomePage);
  }
}
