import { Routes } from '@angular/router';
import { ListaPersonajesPage } from './pages/lista-personajes/lista-personajes.page';
import { DetallePersonajePage } from './pages/detalle-personaje/detalle-personaje.page';

export const routes: Routes = [
  { path: '', redirectTo: 'lista-personajes', pathMatch: 'full' },
  { path: 'lista-personajes', component: ListaPersonajesPage },
  { path: 'detalle-personaje/:id', component: DetallePersonajePage },
];