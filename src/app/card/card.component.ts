import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

@Input()category!:Categorie;


@Output() addToShortlist = new EventEmitter<Categorie>(); 

  btnText: string = 'Add to shortlist';
onAddToShortlist() {
  this.addToShortlist.emit(this.category); 
}
}