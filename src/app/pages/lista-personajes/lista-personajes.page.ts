import { Component, inject } from '@angular/core';
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
  private personajeService = inject(PersonajeService);
  private router = inject(Router);

  personajes: Personaje[] = [];
  personajesPorPagina = 10;
  paginaActual = 1;
  totalPaginas = 0;
  personajesPaginados: Personaje[] = [];

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
      this.mostrarPagina(this.paginaActual);
    }
  }

  verDetalle(index: number) {
    this.router.navigate(['/detalle-personaje', index]);
  }
}