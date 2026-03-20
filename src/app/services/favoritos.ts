/* --- EL CARTERO MÁGICO (SERVICIO DE FAVORITOS) --- */

import { Injectable } from '@angular/core';

@Injectable({
  // 'root' significa que este cartero puede viajar por toda la app 
  // y cualquier página puede llamarlo para pedirle cosas.
  providedIn: 'root'
})
export class FavoritosService {

  // Esta es la mochila secreta donde guardaremos los platos.
  // Es 'private' para que nadie la toque sin permiso, ¡solo el cartero!
  private listaFavoritos: any[] = [];

  constructor() { }

  /* --- ACCIÓN 1: GUARDAR UN TESORO --- */
  agregarFavorito(plato: any) {
    // Primero revisamos si el plato ya está en la mochila para no tenerlo dos veces.
    // Es como mirar si ya tienes ese cromo repetido.
    const existe = this.listaFavoritos.find(p => p.nombre === plato.nombre);
    
    if (!existe) {
      // Si no está, ¡lo metemos en la mochila!
      this.listaFavoritos.push(plato);
      console.log('Plato guardado con éxito:', plato.nombre);
    } else {
      console.log('Este plato ya lo tienes guardado.');
    }
  }

  /* --- ACCIÓN 2: ENSEÑAR LOS TESOROS --- */
  getFavoritos() {
    // Cuando una página nos pregunte: "¿Qué platos nos gustan?",
    // le abrimos la mochila y se los enseñamos todos.
    return this.listaFavoritos;
  }
}
