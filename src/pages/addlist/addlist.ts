import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../app/data.service';
import { HomePage } from '../home/home';
import { NotificationPage } from '../notification/notification';
/**
 * Generated class for the AddlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addlist',
  templateUrl: 'addlist.html',
})
export class AddlistPage {
  list:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataservice:DataService) {
  }

  ionViewDidLoad() {
    var name = JSON.parse(localStorage.getItem("userdetails"));
    let data = {
      'userId':name.user._id,
      'email':name.user.email
    }
    console.log('ionViewDidLoad AddlistPage');
    this.dataservice.requestGetService(data).subscribe(res=>{
      this.list=res.result;
     console.log(this.list)
   })
  }
  goToBack(){
    this.navCtrl.push(HomePage);
  }
  viewNotification(value:any){
    this.navCtrl.push(NotificationPage,{data:value});
  }
}
