import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Justificacion } from './components/justificacion/justificacion';
import { Instalacion } from './components/instalacion/instalacion';
import { PrimerosPasos } from './components/primeros-pasos/primeros-pasos';
import { Utilizacion } from './components/utilizacion/utilizacion';
import { Explicacion } from './components/explicacion/explicacion';
import { Conclusiones } from './components/conclusiones/conclusiones';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  nombreProyecto = 'Actividad 2 Tutorial de una tecnología/Framework';

  secciones = [
    { nombre: 'Inicio', ruta: '/' },
    { nombre: 'Justificación', ruta: '/justificacion' },
    { nombre: 'Instalación', ruta: '/instalacion' },
    { nombre: 'Primeros Pasos', ruta: '/primeros-pasos' },
    { nombre: 'Utilización', ruta: '/utilizacion' },
    { nombre: 'Explicación', ruta: '/explicacion' },
    { nombre: 'Conclusiones', ruta: '/conclusiones' }
  ];
}





