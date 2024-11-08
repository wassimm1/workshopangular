import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent {
constructor(private actR:ActivatedRoute){}
description!:string;
ngOnInit(){
 
  this.actR.queryParamMap.subscribe(params=> this.description=String(params.get('desc')));
 
}
}
