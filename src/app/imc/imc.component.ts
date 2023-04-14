import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  peso: number = 0;
  altura: number = 0;
  genero: string = '';
  imc: number= 0;
  classificacao: string = '';

  calcularIMC() {
    const alturaMetros = this.altura / 100;
    this.imc = this.peso / (alturaMetros * alturaMetros);
    this.classificarIMC();
  }

  classificarIMC() {
    if (this.genero === 'm') {
      if (this.imc < 20.7) {
        this.classificacao = 'Baixo peso';
      } else if (this.imc < 26.4) {
        this.classificacao = 'Peso saudável';
      } else if (this.imc < 27.8) {
        this.classificacao = 'pouco acima do peso';
      } else if (this.imc < 31.1) {
        this.classificacao = 'Acima do peso ideal';
      } else {
        this.classificacao = 'Obesidade';
      }
    } else if (this.genero === 'f') {
      if (this.imc < 19.1) {
        this.classificacao = 'Baixo peso';
      } else if (this.imc < 25.8) {
        this.classificacao = 'Peso saudável';
      } else if (this.imc < 27.3) {
        this.classificacao = 'pouco acima do peso';
      } else if (this.imc < 32.3) {
        this.classificacao = 'Acima do peso ideal';
      } else {
        this.classificacao = 'Obesidade';
      }
    }
  }
}
