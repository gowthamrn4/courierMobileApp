import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../app/data.service';
import swal from 'sweetalert';
import { HomePage } from '../home/home';
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  userId:any;
  cId:any;
  price:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataservice:DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    var data = JSON.parse(localStorage.getItem("userdetails"));
    var name = JSON.parse(localStorage.getItem("requestId"));
    var amountm = JSON.parse(localStorage.getItem("amount"));
    this.price =amountm.amount;
    this.cId = name.requestId;
    this.userId = data.user._id;
  }
  addPayment(value){
   console.log(value);
   let data = {
     'userId':this.userId,
     'courierId':this.cId,
     'name':value.mobileNumber,
     'cardNo':value.doorNo,
     'expDate':value.street,
     'ccv':value.downName_Village,
     'amount':value.Amount,
     'status':'onlinePayment'
   }
   console.log(data)
   this.dataservice.paymentService(data).subscribe(res=>{
   let bind=res;
   if(res.message=='Payment Faild'){
    swal("Oh noes!",res.message,'error');   
   }else if(res.message=='Payment Successfully.'){
    swal("Oh noes!",res.message);  
    this.navCtrl.push(HomePage); 
   }
   })
  }

}
