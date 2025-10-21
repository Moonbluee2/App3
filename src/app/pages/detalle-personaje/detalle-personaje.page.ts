import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-detalle-personaje',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './detalle-personaje.page.html',
  styleUrls: ['./detalle-personaje.page.scss'],
})
export class DetallePersonajePage {

  personaje?: Personaje;

  constructor(private route: ActivatedRoute, private personajeService: PersonajeService) {}

  ionViewWillEnter() {
    const indice = Number(this.route.snapshot.paramMap.get('id'));
    this.personaje = this.personajeService.getPersonaje(indice);
    console.log('👁️ Entrando a detalle del personaje', this.personaje?.alias);
  }
}