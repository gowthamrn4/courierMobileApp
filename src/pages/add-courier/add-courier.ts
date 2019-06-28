import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddFeedbackPage } from '../add-feedback/add-feedback';
import { DataService } from '../../app/data.service';
import { PaymentPage} from '../payment/payment';
import swal from 'sweetalert';

/**
 * Generated class for the AddCourierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-courier',
  templateUrl: 'add-courier.html',
})
export class AddCourierPage {
  userAddress:any;
  amount:any;
  userId:any;
  requestData:any;
  Courierprice:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataservice:DataService) {
    var myData = this.navParams.data.value;
    console.log(myData)
  }

  ionViewDidLoad() {
    var myData = this.navParams.data.value;
    var name = JSON.parse(localStorage.getItem("userdetails"));
    this.userId= name.user._id;
    let data = {
      'userId':name.user._id,
      status:1
    }
    this.dataservice.findCurrentAddressService(data).subscribe(res=>{
    this.userAddress=res.result
    console.log(res.result.userId)
    })
    this.dataservice.getPrice().subscribe(res=>{
      this.Courierprice=res;
      console.log(res)
      for(var i=0;i<this.Courierprice.length;i++){
        if(myData.itemKg==this.Courierprice[i].kg){
          console.log(this.Courierprice[i])
          this.amount=this.Courierprice[i].price;
        }
      }
    })
  }
  goToBack(){
    this.navCtrl.push(AddFeedbackPage);
  }
  saveRequest(value){
    let date = new Date();
    var myData = this.navParams.data.value;
    for(var i=0;i<this.userAddress.length;i++){
      let data = {
         'courierId':'null',
        'userId':this.userId,
        'cityName':this.userAddress[i].cityName,
        'dist':this.userAddress[i].dist,
        'doorNo':this.userAddress[i].doorNo,
        'downName_Village':this.userAddress[i].downName_Village,
        'email': this.userAddress[i].email,
        'mobileNumber': this.userAddress[i].mobileNumber,
        'pinCode':this.userAddress[i].pinCode,
        'state': this.userAddress[i].state,
        'street': this.userAddress[i].street,
        itemDetails : {
          'courierName':myData.courierName,
          'itemKg':myData.itemKg,
          'cdetails':myData.cdetails
      },
      senderDetails : {
          'receiverName':value.receiverName,
         'remail':value.remail,
          'rmobileNumber':value.rmobileNumber,
          'rpinCode':value.rpinCode,
          'rdoorNo':value.rdoorNo,
          'rage':value.rage,
          'rstreet':value.rstreet,
          'rstate':value.rstate,
          'rcityName':value.rcityName
      },
      'status':0,
      'date':date,
      'location':myData.location,
      'paymentStatus':'onlinePayment',
      'amount':this.amount
      }
      console.log(data);
      this.dataservice.requestService(data).subscribe(res=>{
        this.requestData =res.result;
        if(res.message=='Cannot Add New Request'){
          swal("Oh noes!",res.message,'error');
        }else if(res.message=='Request sent Successfully.Please Wait For payment'){
          swal("Oh noes!",res.message);
          localStorage.setItem('requestId',JSON.stringify({requestId:res.result._id}));
          localStorage.setItem('amount',JSON.stringify({amount:res.result.amount}));
          this.navCtrl.push(PaymentPage);
        }
      })
    }
   
  }
}
