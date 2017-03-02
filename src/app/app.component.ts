import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "./services/firebase.service"

import { Business } from "./Business";
import { Category } from "./Category";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FirebaseService ]
})
export class AppComponent implements OnInit {
  businesses: Business[];
  categories: Category[];
  appState:string;
  activeKey:string;
  
  activeCompany:string;
  activeCategory:string;
  activeYears_in_business:number;
  activeDescription:string;
  activePhone:string;
  activeEmail:string;
  activeStreet_address:string;
  activeCity:string;
  activeState:string;
  activeZipcode:string;  
  
  
  
  
  constructor(private _firebaseService: FirebaseService) {
    
  }
  
  ngOnInit(){
    this._firebaseService.getBusinesses()
      .subscribe(businesses => {
        console.log(businesses);
        this.businesses = businesses;
      })
      
    this._firebaseService.getCategories()
      .subscribe(categories => {
        console.log(categories);
        this.categories = categories;
      })      
  }
  
  changeState(state, key){
    console.log('changing state to ' + state)
    if (key){
      console.log('changing key to: ' + key)
      this.activeKey=key;
    }
    this.appState = state;
  }
  
  filterCategory(category){
    this._firebaseService.getBusinesses(category)
      .subscribe(businesses => {
        console.log(businesses);
        this.businesses = businesses;
      });      
  }
  
  addBusiness(
      company:string,
      category:string,
      years_in_business:number,
      description:string,
      phone:string,
      email:string,
      street_address:string,
      city:string,
      state:string,
      zipcode:string){
        
    var created_at = new Date().toString();
    
    var newBusiness = {
      company:company,
      category:category,
      years_in_business:years_in_business,
      description:description,
      phone:phone,
      email:email,
      street_address:street_address,
      city:city,
      state:state,
      zipcode:zipcode,
      created_at:created_at
    }
    
    console.log(newBusiness);
    this._firebaseService.addBusiness(newBusiness);
    
    this.changeState('default', null);
  }
  
  showEdit(business){
    this.changeState("edit", business.$key);
    this.activeCompany =          business.company;
    this.activeCategory =         business.category;
    this.activeYears_in_business =business.years_in_business;
    this.activeDescription =      business.description;
    this.activePhone =            business.phone;
    this.activeEmail =            business.email;
    this.activeStreet_address =   business.street_address;
    this.activeCity =             business.city;
    this.activeState =            business.state;
    this.activeZipcode =          business.zipcode;
    
    
  }
  
  
  updateBusiness() {
    var updBusiness = {
    company:              this.activeCompany,
    category:             this.activeCategory,
    years_in_business:    this.activeYears_in_business,
    description:          this.activeDescription,
    phone:                this.activePhone,
    email:                this.activeEmail,
    street_address:       this.activeStreet_address,
    city:                 this.activeCity,
    state:                this.activeState,
    zipcode:              this.activeZipcode      
    }
    
    this._firebaseService.updateBusiness(this.activeKey, updBusiness)

    this.changeState('default', null);

  }
  
  deleteBusiness(key) {
    this._firebaseService.deleteBusiness(key)

    this.changeState('default', null);
    
    
  }
} 


