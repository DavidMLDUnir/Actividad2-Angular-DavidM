//import { Routes } from '@angular/router';

//export const routes: Routes = [];

import { Routes } from '@angular/router';
import { Justificacion } from './components/justificacion/justificacion';
import { Instalacion } from './components/instalacion/instalacion';
import { PrimerosPasos } from './components/primeros-pasos/primeros-pasos';
import { Utilizacion } from './components/utilizacion/utilizacion';
import { Explicacion } from './components/explicacion/explicacion';
import { Conclusiones } from './components/conclusiones/conclusiones';

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="contenedor-Inicio">
      <h2 align = "center">Bienvenido al Tutorial de Angular</h2>
      <p align = "center">Aquí aprenderás cómo preparar, instalar y utilizar Angular paso a paso.</p>
      <div style="text-align: center;">
      <img src="Lenguajes.jpg" alt="Introducción Angular" style="border-radius: 15px">
      </div>
    </div>
  `,
})
export class HomeComponent {}

export const routes: Routes = [
  { path: '', component: HomeComponent }, // ruta inicio
  { path: 'justificacion', component: Justificacion },
  { path: 'instalacion', component: Instalacion },
  { path: 'primeros-pasos', component: PrimerosPasos },
  { path: 'utilizacion', component: Utilizacion },
  { path: 'explicacion', component: Explicacion },
  { path: 'conclusiones', component: Conclusiones },
];

