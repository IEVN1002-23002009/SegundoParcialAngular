import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zodiaco } from './formulario/zodiaco/zodiaco';
import { initFlowbite } from 'flowbite';
import { Navbar } from './navbar/navbar';
import { Usuario } from './formulario/usuario/usuario';

@Component({
  imports: [RouterOutlet, Zodiaco, Navbar, Usuario],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
title= `web-app`;
  ngOnInit(): void {
    initFlowbite();
  }
}