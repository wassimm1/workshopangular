import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})

export class AddCategorieComponent {
  
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        streetNumber: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      }),
      skills: this.fb.array([
        this.fb.control('') // initialise avec un champ de compétence vide
      ])
    });
  }

  // Getter pour obtenir le FormArray des compétences
  get skills() {
    return this.profileForm.get('skills') as FormArray;
  }

  // Ajouter une nouvelle compétence
  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  // Supprimer une compétence spécifique
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  // Sauvegarder les données du formulaire
  onSave() {
    console.log('Formulaire soumis :', this.profileForm.value);
  }
  get city(){
    
    return this.profileForm.controls['address'].get('city');
  }

  // Réinitialiser le formulaire
  onReset() {
    this.profileForm.reset();
    this.skills.clear();
    this.skills.push(this.fb.control('')); // réinitialise avec un champ de compétence vide
  }

}
