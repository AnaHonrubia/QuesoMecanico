/* --- EL MAPA DE CARRETERAS (RUTAS) --- */

import { Routes } from '@angular/router';

export const routes: Routes = [
  // 🏠 LA CASA PRINCIPAL
  {
    path: 'home', // Si la dirección dice 'home'...
    // ...corre a la carpeta home y saca la página principal.
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  
  // ⚡ EL ATAJO AUTOMÁTICO
  {
    path: '', // Si el mapa está vacío (acabamos de abrir la app)...
    redirectTo: 'home', // ...empuja al usuario directamente a la casa 'home'.
    pathMatch: 'full',
  },
  
  // 🏛️ EL MUSEO DE MONUMENTOS
  {
    path: 'monumentos', // Si queremos ver monumentos...
    // ...busca en la carpeta de monumentos y enséñanos las fotos.
    loadComponent: () => import('./pages/monumentos/monumentos.page').then( m => m.MonumentosPage)
  },
  
  // 🎡 EL RECINTO FERIAL
  {
    path: 'feria', // Si toca irse de fiesta...
    // ...abre la página de la Feria de Albacete.
    loadComponent: () => import('./pages/feria/feria.page').then( m => m.FeriaPage)
  },
  
  // 🥘 EL RESTAURANTE (GASTRONOMÍA)
  {
    path: 'gastronomia', // Si tenemos hambre...
    // ...ve a buscar el Tinder de platos manchegos.
    loadComponent: () => import('./pages/gastronomia/gastronomia.page').then( m => m.GastronomiaPage)
  },
  
  // 💖 EL BAÚL DE LOS RECUERDOS (PLATOS FAVORITOS)
  {
    path: 'favoritos', // Si queremos ver lo que nos ha gustado...
    // ...abre la mochila donde guardamos los platos favoritos.
    loadComponent: () => import('./pages/favoritos/favoritos.page').then( m => m.FavoritosPage)
  },
  
  // ❓ EL CENTRO DE AYUDA
  {
    path: 'ayuda', // Si estamos perdidos y necesitamos un consejo...
    // ...abre el manual de instrucciones con los vídeos.
    loadComponent: () => import('./pages/ayuda/ayuda.page').then( m => m.AyudaPage)
  }
];