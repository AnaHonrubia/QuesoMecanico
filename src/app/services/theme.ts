/* --- EL INTERRUPTOR MÁGICO (SERVICIO DE TEMA) --- */

import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // El 'renderer' es como el pincel que usaremos para pintar la app de oscuro o claro
  private renderer: Renderer2;
  // Una variable para saber si las luces están apagadas (true) o encendidas (false)
  public isDarkMode: boolean = false;

  constructor(
    private rendererFactory: RendererFactory2, 
    @Inject(DOCUMENT) private document: Document
  ) {
    // Aquí preparamos nuestro pincel especial para poder tocar el cuerpo de la página
    this.renderer = this.rendererFactory.createRenderer(null, null);
    // En cuanto arranca la app, miramos cómo prefiere el usuario que esté la luz
    this.initTheme();
  }

  /* --- ¿CÓMO ESTABA LA LUZ ANTES? --- */
  initTheme() {
    // Miramos en nuestro "cajón de la memoria" (localStorage) si ya habíamos elegido un tema
    const savedTheme = localStorage.getItem('user-theme');
    
    if (savedTheme) {
      // Si el cajón dice 'dark', apagamos las luces
      this.setTheme(savedTheme === 'dark');
    } else {
      // Si el cajón está vacío, le preguntamos al móvil: "¿A ti cómo te gusta estar?"
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark);
    }
  }

  /* --- ¡DALE AL INTERRUPTOR! --- */
  setTheme(isDark: boolean) {
    this.isDarkMode = isDark;

    if (isDark) {
      // Si es oscuro, le pegamos una etiqueta llamada 'dark' a toda la página
      this.renderer.addClass(this.document.body, 'dark');
      // Guardamos en el cajón: "Al usuario le gusta el modo noche"
      localStorage.setItem('user-theme', 'dark');
    } else {
      // Si es claro, le quitamos la etiqueta 'dark'
      this.renderer.removeClass(this.document.body, 'dark');
      // Guardamos en el cajón: "Al usuario le gusta el modo día"
      localStorage.setItem('user-theme', 'light');
    }
  }
}
