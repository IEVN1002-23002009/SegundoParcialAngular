import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, CommonModule],
  templateUrl: './zodiaco.html',
})
export class Zodiaco {
  nombre: string="";
  apellidoPaterno: string="";
  apellidoMaterno: string="";

  dia:number=0;
  mes:number=0;
  anio:number=0;
  sexo:string="";

  resultado:boolean=false;
  nombreCompleto:string="";
  edad:number=0;
  actual:number=2026;
  animal:string="";
  imagenSigno:string="";

  signos=[
    {nombre:'Rata', imagen:'img/rata.jpg'},
    {nombre:'Bufalo', imagen:'img/buey.jpg'},
    {nombre:'Tigre', imagen:'img/tigre.jpg'},
    {nombre:'Conejo', imagen:'img/conejo.jpg'},
    {nombre:'Dragon', imagen:'img/dragon.jpg'},
    {nombre:'Serpiente', imagen:'img/serpiente.jpg'},
    {nombre:'Caballo', imagen:'img/caballo.jpg'},
    {nombre:'Cabra', imagen:'img/cabra.jpg'},
    {nombre:'Mono', imagen:'img/mono.jpg'},
    {nombre:'Gallo', imagen:'img/gallo.jpg'},
    {nombre:'Perro', imagen:'img/perro.jpg'},
    {nombre:'Jabali', imagen:'img/jabali.jpg'},

  ];
  imprimir() {
    if (this.anio > 0) {
      this.nombreCompleto = `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
      
      this.edad = this.actual - this.anio;

      this.resultado = true;
      switch (this.anio % 12) {

      case 0:
        this.animal = "Mono";
        this.imagenSigno = "img/mono.jpg";
        break;

      case 1:
        this.animal = "Gallo";
        this.imagenSigno = "img/gallo.jpg";
        break;

      case 2:
        this.animal = "Perro";
        this.imagenSigno = "img/perro.jpg";
        break;

      case 3:
        this.animal = "Jabali";
        this.imagenSigno = "img/jabali.jpg";
        break;

      case 4:
        this.animal = "Rata";
        this.imagenSigno = "img/rata.jpg";
        break;

      case 5:
        this.animal = "Bufalo";
        this.imagenSigno = "img/buey.jpg";
        break;

      case 6:
        this.animal = "Tigre";
        this.imagenSigno = "img/tigre.jpg";
        break;

      case 7:
        this.animal = "Conejo";
        this.imagenSigno = "img/conejo.jpg";
        break;

      case 8:
        this.animal = "Dragon";
        this.imagenSigno = "img/dragon.jpg";
        break;

      case 9:
        this.animal = "Serpiente";
        this.imagenSigno = "img/serpiente.jpg";
        break;

      case 10:
        this.animal = "Caballo";
        this.imagenSigno = "img/caballo.jpg";
        break;

      case 11:
        this.animal = "Cabra";
        this.imagenSigno = "img/cabra.jpg";
        break;
      }
    }
  }
}