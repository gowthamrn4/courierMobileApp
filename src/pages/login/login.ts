import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DataService } from '../../app/data.service';
import { RegisterPage } from '../register/register';
import swal from 'sweetalert';
 @Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  @ViewChild('loginform') public loginform: NgForm;
  public model: any;
  loginData:any;
  constructor(
    public navCtrl: NavController,
    public dataservice:DataService
  ) {
    this.model = {};
  }
  
  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      var name = JSON.parse(localStorage.getItem("userdetails"));
      this.navCtrl.push(HomePage);
      }
  }
  
  loginForm(value){
    console.log(value)
    this.dataservice.login(value).subscribe(res=>{
    this.loginData=res;
    if(res.message=='Authentication failed. User not found.'){
     swal("Oh noes!",res.message);
    }else if(res.message=='Authentication failed. Wrong password.'){
     swal("Oh noes!",res.message);
    }else{
      localStorage.setItem('currentUser',JSON.stringify({token:res.token}));
      localStorage.setItem('userdetails',JSON.stringify({user:res.user}));
      this.navCtrl.push(HomePage);
      }
    })
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }
}
