/* --- 1. LAS MOCHILAS DE ANGULAR --- */
// Traemos las piezas para fabricar la página.
import { Component, OnInit } from '@angular/core';
// El CommonModule es como una caja de trucos para hacer listas (*ngFor) o esconder cosas (*ngIf).
import { CommonModule } from '@angular/common';
// El FormsModule sirve por si queremos que el usuario escriba en cajitas de texto.
import { FormsModule } from '@angular/forms';

/* --- 2. LAS PIEZAS DE LEGO DE IONIC --- */
// Sacamos de la caja todas las piezas visuales: tarjetas (IonCard), títulos y el acordeón (que se abre y cierra).
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
  IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonIcon,
  IonList, IonListHeader 
} from '@ionic/angular/standalone';

/* --- 3. EL ÁLBUM DE PEGATINAS (ICONOS) --- */
// Traemos el pegamento (addIcons).
import { addIcons } from 'ionicons';
import { videocamOutline, helpCircleOutline, caretDownCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-ayuda', // El nombre secreto de esta página.
  templateUrl: './ayuda.page.html', // Aquí está el dibujo de la página.
  styleUrls: ['./ayuda.page.scss'], // Aquí están los colores y estilos.
  
  /* --- 4. SOY INDEPENDIENTE --- */
  standalone: true, // ¡Puedo funcionar yo solito sin ayuda de nadie!
  
  /* --- 5. MI LISTA DE MATERIALES --- */
  // Aquí anotamos todo lo que hemos traído arriba para que Angular no se olvide de usarlo.
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButtons, IonMenuButton, IonCard, IonCardContent, 
    IonCardHeader, IonCardTitle, IonAccordion, IonAccordionGroup, 
    IonItem, IonLabel, IonIcon,
    IonList, IonListHeader 
  ]
})
export class AyudaPage implements OnInit {

  /* --- 6. EL CONSTRUCTOR --- */
  constructor() { 
    // Justo antes de empezar, pegamos los iconos en nuestra pared para que se vean bonitos.
    addIcons({ videocamOutline, helpCircleOutline, caretDownCircleOutline });
  }

  /* --- 7. ¡EMPIEZA LA ACCIÓN! (OnInit) --- */
  // Este método se activa solo cuando la página ya está lista y "viva" en la pantalla.
  ngOnInit() {
    
  }

}