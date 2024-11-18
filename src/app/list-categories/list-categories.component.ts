import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { Categorie } from '../models/categorie';
import { ShortList } from '../models/short-list';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements AfterViewInit{
  @ViewChildren(CardComponent) cardComponents!: QueryList<CardComponent>
  categories : Categorie[]=[
    
    {"id":1,"title":"Grand électroménager",
    "image":"assets/images/categorie_electromenager.jpg", "description":"Grand électroménager",
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/images/categorie_petit_electromenager.jpg", "description":"Petit électroménager",
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/images/categorie_produits_informatiques.jpg", "description":"Produits informatiques",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
    "description":"test", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/images/categorie_tv_image_son.jpg", "description":"TV, images et son",
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
    "description":"Produits voiture","available":false},
  ]
  
  titre='';
showDesc(x:string){
  alert(x);
}

shortlist: ShortList[] = [];

  
  get filteredCategories(): Categorie[] {
    return this.categories.filter(cat =>
      cat.title.toLowerCase().includes(this.titre.toLowerCase())
    );
  }


    // Ajouter une catégorie à la shortlist
  handleAddToShortlist(category: Categorie): void {
    const idUser = 123; // ID utilisateur arbitraire

    // Vérifiez si la catégorie existe déjà dans la shortlist pour cet utilisateur
    const alreadyInShortlist = this.shortlist.some(item => 
      item.idElement === category.id && item.idUser === idUser
    );

    if (alreadyInShortlist) {
      console.log(`Category "${category.title}" is already in the shortlist for this user.`);
      return; // Ne pas ajouter si elle est déjà présente
    }

    // Si la catégorie n'est pas dans la shortlist, on l'ajoute
    const itemToAdd: ShortList = {
      id: this.shortlist.length + 1,
      idUser: idUser,
      idElement: category.id,
      typeElement: 'category'
    };

    this.shortlist.push(itemToAdd); // Ajoute à la shortlist
    console.log(`Category "${category.title}" (ID: ${category.id}) has been added to the shortlist.`);
  }
  ngAfterViewInit(): void {
    this.cardComponents.forEach((card, index) => {
      card.btnText = `Add to shortlist (${index + 1})`;
    });
  }
  updateBtnTextForAllCards(newText: string): void {
    this.cardComponents.toArray().forEach(card => {
      card.btnText = newText;  // Met à jour la propriété btnText dans chaque CardComponent
    });
  }
}
   




