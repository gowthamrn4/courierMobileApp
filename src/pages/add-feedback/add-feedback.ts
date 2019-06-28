import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DataService } from '../../app/data.service';
import swal from 'sweetalert';
import { AddCourierPage } from '../add-courier/add-courier';
import { PaymentPage } from '../payment/payment';
/**
 * Generated class for the AddFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-feedback',
  templateUrl: 'add-feedback.html',
})
export class AddFeedbackPage {
  feedBack:any;
  locationCurrent:any;
  Courierprice:any;
  myDate = new Date();
  @ViewChild('ruleaddform') myForm;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataservice:DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFeedbackPage');
    let date = new Date();
    console.log(date)

    this.dataservice.getPrice().subscribe(res=>{
      this.Courierprice=res;
    })
    this.dataservice.findLocationService().subscribe(res=>{
      this.locationCurrent=res;
      console.log(res)
    })
  }
  goToBack(){
    this.navCtrl.push(HomePage);
  }
  savefeedback(value){
 
    this.dataservice.addFeedbackService(value).subscribe(res=>{
      this.feedBack=res;
      swal("Oh noes!",res.message);
      this.myForm.resetForm()
    })
  }
  saveRequest(value:any){
    this.navCtrl.push(AddCourierPage,{value});
  }
}
