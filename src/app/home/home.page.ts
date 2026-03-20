/* --- EL CEREBRO DE NUESTRA PÁGINA (CONTROLADOR) --- */

// Traemos las piezas básicas para construir la página
import { Component } from '@angular/core';
// Traemos el "mapa" para que los botones sepan a qué otra página saltar
import { RouterLink } from '@angular/router';

// Aquí pedimos prestadas todas las herramientas de Ionic 
// Es como abrir una caja gigante de herramientas y sacar solo las que necesitamos
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonButton, 
  IonButtons, IonMenu, IonMenuButton, IonList, IonItem, IonLabel, 
  IonIcon, IonMenuToggle 
} from '@ionic/angular/standalone';

// Traemos el pegamento para los iconos
import { addIcons } from 'ionicons';
// Y elegimos qué dibujos queremos
import { businessOutline, restaurantOutline, ticketOutline, homeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home', // El nombre clave de esta pieza en nuestro proyecto
  templateUrl: 'home.page.html', // Aquí está el dibujo (HTML) de la página
  styleUrls: ['home.page.scss'], // Aquí están las pinturas y colores (CSS)
  standalone: true, // Significa que esta pieza es independiente y fuerte
  
  // En esta lista anotamos todas las herramientas que importamos arriba para poder usarlas
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonButton, 
    IonButtons, IonMenu, IonMenuButton, IonList, IonItem, IonLabel, 
    IonIcon, IonMenuToggle, RouterLink
  ],
})
export class HomePage {
  constructor() {
    /* --- EL ÁLBUM DE CROMOS (ICONOS) --- */
    // Aquí registramos los dibujos para que la app sepa cuáles son cuando los llamemos por su nombre
    addIcons({ 
      businessOutline,   // El dibujo del maletín/empresa
      restaurantOutline, // El dibujo del tenedor y cuchillo
      ticketOutline,     // El dibujo del ticket de entrada
      homeOutline        // El dibujo de la casita
    });
  }
}
