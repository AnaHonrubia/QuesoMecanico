/* --- 1. LAS HERRAMIENTAS Y EL MAPA --- */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Traemos la "Caja de Herramientas de Ionic" y el "Mando de Alertas" para avisos mágicos
import { IonicModule, AlertController } from '@ionic/angular';
// El RouterLink es el mapa para saltar de una habitación a otra en nuestra app
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
// Elegimos dos pegatinas: una flechita y un corazón roto (por si algo no nos gusta)
import { chevronForwardOutline, heartDislikeOutline } from 'ionicons/icons';

/* --- 2. EL CARTERO MÁGICO (SERVICIO) --- */
// Importamos el Servicio de Favoritos. ¡Él es quien guarda la lista en su mochila!
import { FavoritosService } from '../../services/favoritos';  

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class FavoritosPage implements OnInit {

  // Aquí creamos una lista vacía para poner nuestros platos favoritos
  misFavoritos: any[] = [];

  /* --- 3. EL EQUIPO DE TRABAJO --- */
  constructor(
    private favService: FavoritosService, // Llamamos al cartero (servicio)
    private alertCtrl: AlertController    // Llamamos al experto en mensajes pop-up
  ) {
    // Pegamos los iconos en nuestra pared
    addIcons({ chevronForwardOutline, heartDislikeOutline });
  }

  /* --- 4. LOS MOMENTOS MÁGICOS --- */
  
  // Esto pasa cuando la página se construye por primera vez
  ngOnInit() {
    this.cargarFavoritos();
  }

  // ¡OJO! Esto pasa CADA VEZ que entras en la pantalla.
  // Si añades un plato en otra página y vuelves aquí, ¡esta función hace que aparezca!
  ionViewWillEnter() {
    this.cargarFavoritos();
  }

  /* --- 5. LAS ACCIONES --- */
  
  // Le preguntamos al cartero: "¿Qué platos tenemos guardados?" y los ponemos en nuestra lista
  cargarFavoritos() {
    this.misFavoritos = this.favService.getFavoritos();
  }

  // Esta función abre una alerta para leer la receta
  // Usamos "async" y "await" porque las ventanas mágicas tardan un pelín en aparecer
  async verReceta(plato: any) {
    const alert = await this.alertCtrl.create({
      header: plato.nombre,               // Nombre del plato en grande
      subHeader: 'Información del plato', // Un subtítulo pequeño
      message: plato.descripcion,         // ¡Toda la historia de cómo se cocina!
      buttons: ['Cerrar']                 // El botón para quitar la ventana
    });
    
    // ¡Tachán! Mostramos la ventana en la pantalla
    await alert.present(); 
  }
}