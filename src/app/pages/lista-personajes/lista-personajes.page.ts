import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,  // 🔹 si usas standalone
  imports: [IonicModule, CommonModule],
  templateUrl: './lista-personajes.page.html',
  styleUrls: ['./lista-personajes.page.scss'],
})
export class ListaPersonajesPage implements OnInit {

  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService, private router: Router) {}

  ngOnInit() {
    this.personajes = this.personajeService.getPersonajes();
  }

  verDetalle(index: number) {
    this.router.navigate(['/detalle-personaje', index]);
  }
}
