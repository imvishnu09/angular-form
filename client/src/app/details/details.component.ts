import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import {DetailsServiceService} from '../service/details-service.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private formBuilder: FormBuilder,
    private dService: DetailsServiceService
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: '',
      dob: '',
      gender: '',
      news:'',
      ent: '',
      sports: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    const {  name,
    email,
    dob,
    gender,
    news,
    ent,
    sports} = customerData
    let details = {
      name,
      email,
      dob,
      gender,
      topics:[]
    }
    if(news === true){
      details.topics.push("News")
    }
    if(ent === true){
      details.topics.push("Entertainment")
    }
    if(sports === true){
      details.topics.push("Sports")
    }
    console.log("detils", details)
    this.dService.addDetails(details).subscribe( (data: any) => console.log("gdg",data ), // success path
    error =>  console.log("error",error ))// error path);
    // this.items = this.cartService.clearCart();
  }
}
