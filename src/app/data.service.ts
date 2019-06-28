import { Injectable } from '@angular/core';
import { map } from 'rxjs-compat/operator/map';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http } from '@angular/http';

export interface User{
    name:string,
    age:number,
    city:string
}
@Injectable()

export class DataService{   
    userloginservice:any;
    regService:any;
    AddAddress:any;
    public header: any;
    AddFeedBack:any;
    getcourierPrice:any;
    request:any;
    // baseURL='http://localhost:3000'
    baseURL='https://courierssystem.herokuapp.com'
    constructor(public http:Http) {}
   
    /* login service */
    login(value){
        return this.http.post(this.baseURL+'/user/login',value)
        .map(result=>this.userloginservice=result.json())
      }
    /* end */
    
    /* register service */
    registerService(value){
        return this.http.post(this.baseURL+'/user/regsiter',value)
        .map(res=>this.regService=res.json())
    }
    /* end */

    addFeedbackService(value){
        return this.http.post(this.baseURL+'/feedback/addFeedBack',value)
        .map(result=>this.AddFeedBack=result.json())
    }

    /** use address book */
    adduserAddressService(value){
        return this.http.post(this.baseURL+'/userAddress/add_address',value)
        .map(result=>this.AddAddress=result.json())
    }
    /* end */

    /** get current user address */
    findUserAddressService(value){
        return this.http.post(this.baseURL+'/userAddress/get_address',value)
        .map(result=>this.AddAddress=result.json())
    }
    /* end */

    /* del address */
    deleteAddress(value){
        return this.http.post(this.baseURL+'/userAddress/del_address',value)
        .map(result=>this.AddAddress=result.json()) 
    }
    /* end */

    /* use address */
    userCurrentAddress(value){
        return this.http.post(this.baseURL+'/userAddress/use_address',value)
        .map(result=>this.AddAddress=result.json()) 
    }
    /* end  */

    /* get kg */
    getPrice(){
    return this.http.get(this.baseURL+'/price/get_cprice')
    .map(result=>this.getcourierPrice=result.json())
    }
    /* */

    /* find location */
    findLocationService(){
        return this.http.get(this.baseURL+'/location/findLocation')
        .map(result=>this.getcourierPrice=result.json())
    }
    /* end */

    /* user address */
    findCurrentAddressService(value){
        return this.http.post(this.baseURL+'/userAddress/current_address',value)
        .map(result=>this.AddAddress=result.json()) 
    }
    /* end */
    
    /* new request */
    requestService(value){
        return this.http.post(this.baseURL+'/request/addRequest',value)
        .map(result=>this.request=result.json()) 
    }
    /* end */
     /* new request */
     requestGetService(value){
        return this.http.post(this.baseURL+'/request/findRequest',value)
        .map(result=>this.request=result.json()) 
    }
    /* end */
    /* payment */
    paymentService(value){
        return this.http.post(this.baseURL+'/payment/addPayment',value)
        .map(result=>this.request=result.json()) 
    }
    /* end */

    getNotificationService(value){
        return this.http.post(this.baseURL+'/notification/find',value)
        .map(result=>this.request=result.json()) 
    }
}
