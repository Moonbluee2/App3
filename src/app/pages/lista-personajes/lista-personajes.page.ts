import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,  
  imports: [IonicModule, CommonModule],
  templateUrl: './lista-personajes.page.html',
  styleUrls: ['./lista-personajes.page.scss'],
})
export class ListaPersonajesPage {
  personajes: Personaje[] = [];
  personajesPorPagina = 10; // Muestra 10 personajes por página (2 filas de 5)
  paginaActual = 1;
  totalPaginas = 0;
  personajesPaginados: Personaje[] = [];

  constructor(private personajeService: PersonajeService, private router: Router) {}

  ionViewWillEnter() {
    this.personajes = this.personajeService.getPersonajes();
    this.totalPaginas = Math.ceil(this.personajes.length / this.personajesPorPagina);
    this.mostrarPagina(1);
  }

  mostrarPagina(num: number) {
    this.paginaActual = num;
    const inicio = (num - 1) * this.personajesPorPagina;
    const fin = inicio + this.personajesPorPagina;
    this.personajesPaginados = this.personajes.slice(inicio, fin);
  }

  cargarMas() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      const inicio = 0;
      const fin = this.paginaActual * this.personajesPorPagina;
      this.personajesPaginados = this.personajes.slice(inicio, fin);
    }
  }

  verDetalle(index: number) {
    this.router.navigate(['/detalle-personaje', index]);
  }
}
