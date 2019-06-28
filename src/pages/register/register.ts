import { Component,ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../app/data.service';
import { LoginPage } from '../login/login';
import swal from 'sweetalert';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  reg:any;
  @ViewChild('registerform') myForm;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataservice:DataService
  ) {
    
  }

  
  
 
  ionViewDidLoad() {

  }
  goTologin(value){
   console.log(value)
   this.dataservice.registerService(value).subscribe(res=>{
     this.reg=res;
     if(this.reg.message=='Email Already Exsit'){
      swal("Oh noes!",this.reg.message);
      this.myForm.resetForm();
     }else if(this.reg.message =='Register Successfully..'){
      swal("Oh noes!",this.reg.message);
      this.myForm.resetForm();
      this.navCtrl.push(LoginPage);
     }
   })
  }
}
