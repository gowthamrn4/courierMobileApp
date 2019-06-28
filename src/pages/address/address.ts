import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import{DataService} from '../../app/data.service';
import swal from 'sweetalert';

/**
 * Generated class for the ListpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage implements OnInit {
addressS:any;
GetAddress:any;
loader:any
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dataservice:DataService,
              private nav:Nav
              ) {
              
  }
  ngOnInit(){
    var name = JSON.parse(localStorage.getItem("userdetails"));
                var _id = name.user._id;   
                let data ={
                  'userId':_id
                }
                this.dataservice.findUserAddressService(data).subscribe(res=>{
                this.GetAddress=res.result;
                })           
  }

  ionViewDidLoad() { 
 
   }
  addAddress(value){
    var name = JSON.parse(localStorage.getItem("userdetails"));
    var _id = name.user._id;
    var email = name.user.email;
    let data = {
      'userId':_id,
      'email':email,
      'cityName':value.cityName,
      'dist':value.dist,
      'doorNo':value.doorNo,
      'downName_Village':value.downName_Village,
      'mobileNumber':value.mobileNumber,
      'pinCode':value.pinCode,
      'state':value.state,
      'street':value.street,
      'status':0
    }
    console.log(data)
    this.dataservice.adduserAddressService(data).subscribe(res=>{
    this.GetAddress=res.result;
    if(res.message=='User Can Add two Address only'){
      swal("Oh noes!",res.message,'error');
    }else if(res.message=='Add SuccessFully'){
      swal("Oh noes!",res.message);
    }
    })
  }
  close(value){
    let data  = {
      'userId':value.userId,
       '_id':value._id
    }
    this.dataservice.deleteAddress(data).subscribe(res=>{
      this.GetAddress=res.result;
      if(res.message=='Cannot Delete'){
        swal("Oh noes!",res.message,'error');   
      }else if(res.message=='Delete Successfully'){
        swal("Oh noes!",res.message);   
      }
    })
  }
  changeStatus(value){
    let data = {
      'userId':value.userId,
      '_id':value._id,
      'status':1
    }
  this.dataservice.userCurrentAddress(data).subscribe(res=>{
    this.GetAddress=res.result;
    if(res.message=='cannot update'){
      swal("Oh noes!",res.message,'error');   
    }else if(res.message=='Set Current Address Successfully'){
      swal("Oh noes!",res.message);   
    }
  })
  }

}
