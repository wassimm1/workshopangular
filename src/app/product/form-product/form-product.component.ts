import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
products!:Product[];
prodyctForm=new FormGroup({
  name:new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z]*')]),
  categoryId:new FormControl('', Validators.required),
  price:new FormControl('', [Validators.required,Validators.pattern('^\d+(\.\d+)?$')]),
  Description:new FormControl(''),
  image:new FormControl(''),
  promotion:new FormControl('',Validators.pattern('^(0|[1-9][0-9]?)$')),
  Brand:new FormControl('')
})
}
