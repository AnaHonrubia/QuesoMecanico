/* --- EL JEFE DE LA APP (COMPONENTE RAÍZ) --- */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// Sacamos las piezas grandes: el esqueleto de la app (IonApp), el menú y los interruptores
import { 
  IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, 
  IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, 
  IonMenuToggle, IonToggle, IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
// Browser nos sirve para abrir documentos (como un PDF) fuera de la app
import { Browser } from '@capacitor/browser';
import { FormsModule } from '@angular/forms';
// Traemos los dibujos del menú: casa, maletín, restaurante, ticket, corazón y luna
import { homeOutline, businessOutline, restaurantOutline, ticketOutline, heart, informationCircleOutline, moonOutline } from 'ionicons/icons'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    CommonModule, IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, 
    IonTitle, IonContent, IonList, IonItem, IonIcon, 
    IonLabel, IonMenuToggle, RouterLink, RouterLinkActive, IonToggle, FormsModule, IonFooter
  ] 
})
export class AppComponent implements OnInit {
  
  /* --- 1. LA LISTA DEL MENÚ LATERAL --- */
  // Aquí anotamos las páginas que queremos que el usuario vea siempre en el menú
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home-outline' },
    { title: 'Monumentos', url: '/monumentos', icon: 'business-outline' },
    { title: 'Gastronomía', url: '/gastronomia', icon: 'restaurant-outline' },
    { title: 'Blog Feria', url: '/feria', icon: 'ticket-outline' },
  ];

  /* --- 2. LOS BOTONES SECRETOS --- */
  // Esta variable decide si el botón de 'Favoritos' aparece o se queda escondido
  public mostrarFavoritos: boolean = false;

  // Esta variable nos dice si las luces están apagadas (modo oscuro)
  modoOscuro: boolean = false;

  constructor(private router: Router) {
    // Registramos todos los iconos que vamos a usar en el menú
    addIcons({ homeOutline, businessOutline, restaurantOutline, ticketOutline, heart, informationCircleOutline, moonOutline });
  }

  /* --- ¡APP ENCENDIDA! --- */
  ngOnInit() {
    // 1. Miramos en el "cajón de la memoria" si el usuario dejó las luces apagadas la última vez
    const temaGuardado = localStorage.getItem('modoOscuro');

    if (temaGuardado === 'true') {
      this.modoOscuro = true;
      document.body.classList.add('dark'); // Pintamos la app de negro
    }

    // 2. El vigilante de caminos: escucha en qué página estamos
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects; 
      // ¡TRUCO! Si el usuario entra en Gastronomía, hacemos aparecer el botón de Favoritos
      this.mostrarFavoritos = url.includes('/gastronomia');
    });
  }

  /* --- EL INTERRUPTOR DE LA LUZ --- */
  cambiarTema(event: any) {
    // Miramos si el interruptor está hacia un lado o hacia el otro
    this.modoOscuro = event.detail.checked;

    if (this.modoOscuro) {
      document.body.classList.add('dark'); // ¡Apaga las luces! (Fondo oscuro)
    } else {
      document.body.classList.remove('dark'); // ¡Enciende las luces! (Fondo claro)
    }

    // Guardamos la decisión para que la app se acuerde la próxima vez
    localStorage.setItem('modoOscuro', this.modoOscuro.toString());
  }

  /* --- EL BOTÓN DE INFORMACIÓN (PDF) --- */
  async abrirInfo() {
    // Buscamos dónde está guardado nuestro librito de información (PDF)
    const urlPDF = window.location.origin + '/assets/informacion.pdf';

    // Abrimos el navegador del móvil para que el usuario pueda leerlo
    await Browser.open({ url: urlPDF });
  }
}