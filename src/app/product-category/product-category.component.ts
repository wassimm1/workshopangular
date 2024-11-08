import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
constructor(private actr:ActivatedRoute){}
id!: Number ;
categorie!:string;
desc!:string;
productsByCatrgorie! :Product[];
listProducts :   Product[]=[
  {"id":1, "name":"Refrigérateur LGInox","image":"assets/images/refrigerateur.jpg","categoryId":1,
  "description":"","price":2800,"brand":"LG","promotion":0},
  {"id":2, "name":"Refrigérateur SamsungBlanc","image":"assets/images/refrigerateur_samsung.jpeg","categoryId":1,
  "description":"", "price":2400,"brand":"Samsung","promotion":0},
  {"id":3, "name":"Lave vaisselle Beko",
  "image":"assets/images/lave_vaisselle.jpg", "categoryId":1,
  "description":"","price":1875,"brand":"BEKO", "promotion":0},
  {"id":4, "name":"Oppo SmartPhone","image":"assets/images/oppo_smart.jpg","categoryId":4,
  "description":"", "price":1200,"brand":"OPPO","promotion":0},
  {"id":5, "name":"Hachoir",
  "image":"assets/images/hachoir.jpg","categoryId":2,
  "description":"","price":120,"brand":"Moulinex", "promotion":0},
  {"id":6, "name":"TV 50''LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"",
  "price":1800,"brand":"LG","promotion":0},
]
ngOnInit(){
  
  //snapshot
  this.id=Number(this.actr.snapshot.params["id"])
  //this.id=Number(this.actr.snapshot.paramMap.get('id'))
  //Observable
  this.actr.paramMap.subscribe(params =>this.id=Number (params.get('id')))
  this.actr.queryParamMap.subscribe(params =>this.categorie=String (params.get('name')))
  //Optionel:
  this.categorie=String(this.actr.snapshot.queryParamMap.get('name'))
  //this.desc=String(this.actr.snapshot.queryParamMap.get('desc'))
  //this.actr.queryParamMap.subscribe(params =>this.categorie=String (params.get('name')))

  this.productsByCatrgorie= this.listProducts.filter(p=>p.categoryId == this.id);
 // console.log(this.id)
  //console.log(this.productsByCatrgorie.length)
 // console.log(this.categorie)
}

  
}
