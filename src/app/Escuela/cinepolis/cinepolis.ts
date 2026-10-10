import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ICinepolis } from './icinepolis';

@Component({
  selector: 'app-cinepolis',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css',
})
export class Cinepolis implements OnInit{
  formulario!: FormGroup;

  cinepolis: ICinepolis[]=[];
  nuevoPedido: ICinepolis={
    nombre:'xx',
    cantidadCompradores:0,
    tarjetaCineco:'',
    cantidadBoletas:0,
  };

  valorAPagar: number = 0;
  mensajeError: string = '';

  ngOnInit(): void{
    this.cargarPedido();

    this.formulario = new FormGroup({
    nombre: new FormControl(''),
    cantidadCompradores:new FormControl(''),
    tarjetaCineco: new FormControl('No'),
    cantidadBoletas: new FormControl(''),
    });
  }

  muestraPedido():void{
    this.nuevoPedido.nombre=this.formulario.value.nombre
    this.nuevoPedido.cantidadCompradores=this.formulario.value.cantidadCompradores
    this.nuevoPedido.tarjetaCineco=this.formulario.value.tarjetaCineco
    this.nuevoPedido.cantidadBoletas=this.formulario.value.cantidadBoletas

    const compradores = this.nuevoPedido.cantidadCompradores;
    const boletas = this.nuevoPedido.cantidadBoletas;
    const tieneTarjeta = this.nuevoPedido.tarjetaCineco;

    //condicion de 7 boletas por persona
    if (boletas > (compradores * 7)) {
      this.mensajeError = `Error: No puedes comprar más de 7 boletas por persona. Límite para ${compradores} comprador(es): ${compradores * 7}.`;
      this.valorAPagar = 0;
      this.nuevoPedido.totalPagado = 0;
      return;
    }

    this.mensajeError = '';
    
    //calcular precio
    const precioBase = 12;
    let total = boletas * precioBase;
    let descuento = 0;

    // Descuento
    if (boletas > 5) {
      descuento = total * 0.15;
    } else if (boletas >= 3 && boletas <= 5) {
      descuento = total * 0.10;
    }
    
    total = total - descuento;

    //Descuento Tarjeta 
    if (tieneTarjeta === 'Si') {
      total = total - (total * 0.10);
    }

    this.valorAPagar = total;
    this.nuevoPedido.totalPagado = total;
  }

  cargarPedido(): void {
    // Lógica para cargar pedidos
  }
}
