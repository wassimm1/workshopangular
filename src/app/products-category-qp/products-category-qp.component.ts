import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-category-qp',
  templateUrl: './products-category-qp.component.html',
  styleUrls: ['./products-category-qp.component.css']
})
export class ProductsCategoryQPComponent {
  userForm = new FormGroup({
    name: new FormControl('',Validators.required),
    competences: new FormArray([
      new FormControl('')
    ])
  });

  addConnexion() {
    console.log('Formulaire soumis :', this.userForm.value);
  }

  get competences() {
    return this.userForm.get('competences') as FormArray;
  }
  get name() {
    return this.userForm.get('name') as FormControl;
  }

  addCompetence() {
    this.competences.push(new FormControl(''));
  }

}
