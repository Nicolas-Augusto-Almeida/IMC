import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  altura: number = 0;
  peso: number = 0;
  imc: number = 0;

  onClick(){
    this.imc = this.peso / (this.altura * this.altura)

  }
}