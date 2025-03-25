import { Component } from '@angular/core';
import e from 'express';

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
  text: string = " ";
  text2: string = " ";
  image: string = " ";


  onClick(){
    this.imc = this.peso / (this.altura * this.altura)
    this.text = 'IMC: '
    if (this.imc < 18.5){
      this.text2 = ' Abaixo do peso'
      this.image = 'ABAIXO.png'
    }
    if (this.imc >= 18.5 && this.imc <= 24.9 ){
      this.text2 = ' Peso normal'
      this.image = 'Normal.png'
    }
    if (this.imc >= 25 && this.imc <= 29.9 ){
      this.text2 = ' Sobrepeso'
      this.image = 'Sobrepeso.png'
    }
    if (this.imc >= 30 && this.imc <= 34.9 ){
      this.text2 = ' Obesidade I'
      this.image = 'Obesidade_1.png'
    }
    if (this.imc >= 35 && this.imc <= 39.9 ){
      this.text2 = ' Obesidade II'
      this.image = 'Obesidade_2.png'
    }
    if (this.imc >= 40 ){
      this.text2 = ' Obesidade III'
      this.image = 'Obesidade_3.png'
    }
  }
}