import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddlistPage } from '../addlist/addlist';
import { DataService } from '../../app/data.service';
/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  message:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private dataservice:DataService) {
    var myData = this.navParams.data.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
    var myData = this.navParams.data.data;
    let data = {
      courierId:myData.courierId
    }
    this.dataservice.getNotificationService(data).subscribe(res=>{
      let list=res.result;
      for(let i=0;i<list.length;i++){
        this.message=list[i].message
        console.log(list[i].message)
      }
    })
  }
  goToBack(){
    this.navCtrl.push(AddlistPage);
  }
}
