import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import "rxjs/add/operator/map";

import { Business } from "../Business";
import { Category } from "../Category";


@Injectable()
export class FirebaseService {
  
  businesses : FirebaseListObservable<Business[]>;
  categories : FirebaseListObservable<Category[]>;

  constructor(private _af: AngularFire) {
  } 
  
  getBusinesses(category:string=null){
      console.log('here in services getBusinesses')
      console.log("category " + category)
      if (category != null && category != "0") {
        this.businesses = this._af.database.list("/businesses", {
          query: {
              orderByChild: 'category',
              equalTo: category
            }
          }) as FirebaseListObservable<Business[]>        
      } else {
        this.businesses = this._af.database.list("/businesses") as
        FirebaseListObservable<Business[]>
        //console.log(this.businesses)
      }
      return this.businesses;
  }
  
  getCategories(){
      this.categories = this._af.database.list("/categories") as
      FirebaseListObservable<Category[]>
      return this.categories;
  }
  
  addBusiness(newBusiness){
    console.log(newBusiness)
    return this.businesses.push(newBusiness);
  }
  
  updateBusiness(key, updBusiness) {
    return this.businesses.update(key, updBusiness);
    
  }
  
  deleteBusiness(key) {
    return this.businesses.remove(key);
  }
  
}

