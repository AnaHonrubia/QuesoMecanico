/* --- EL "TINDER" DE COMIDA MANCHEGA --- */

import { Component, OnInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { close, heart } from 'ionicons/icons';
// Llamamos al "Cartero" (Servicio) para que guarde los platos que nos gusten
import { FavoritosService } from '../../services/favoritos'; 
import { RouterLink } from '@angular/router';

/* --- EL MOTOR DE LAS CARTAS (SWIPER) --- */
// Importamos 'Swiper', que es el motor que permite que las cartas se muevan de lado a lado
import { register } from 'swiper/element/bundle';
// ¡Arrancamos el motor!
register();

@Component({
  selector: 'app-gastronomia', 
  templateUrl: './gastronomia.page.html', 
  styleUrls: ['./gastronomia.page.scss'], 
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
  // Esto es para que Angular no se asuste al ver etiquetas raras de Swiper
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GastronomiaPage implements OnInit { 

  // Esta es una "pinza" para agarrar el carrusel de fotos desde aquí
  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  // Nuestro menú de platos deliciosos de Albacete
  platos = [
    { nombre: 'Gazpacho Manchego', descripcion: 'Gazpachos típicos con torta cenceña.', imagen: 'assets/img/gazpachos.jpg' },
    { nombre: 'Migas Ruleras', descripcion: 'Migas de pan con embutido.', imagen: 'assets/img/migas.jpg' },
    { nombre: 'Ajo Mataero', descripcion: 'Plato tradicional de los días de matanza.', imagen: 'assets/img/ajoMataero.jpg' },
    { nombre: 'Gachas', descripcion: 'Gachas tradicionales.', imagen: 'assets/img/gachas.jpg' },
    { nombre: 'Atascaburras', descripcion: 'Plato típico de invierno.', imagen: 'assets/img/atascaburras.jpg' },
    { nombre: 'Flores Fritas', descripcion: 'Dulce crujiente tradicional.', imagen: 'assets/img/floresFritas.jpg' },
    { nombre: 'Queso Manchego', descripcion: 'El queso más famoso del mundo.', imagen: 'assets/img/queso.jpg' }, 
    { nombre: 'Miguelitos', descripcion: 'Hojaldre relleno de crema.', imagen: 'assets/img/miguelitos.jpg' }
  ];

  constructor(
    private toastCtrl: ToastController, // Para sacar mensajes rápidos por pantalla
    private favService: FavoritosService // Nuestra mochila para guardar favoritos
  ) {
    // Ponemos los iconos del corazón y la X
    addIcons({ close, heart });
  }

  ngOnInit() {}

  /* --- BOTÓN: "ESTO NO ME GUSTA" (X) --- */
  async descartar() {
    const swiperEl = this.swiperRef?.nativeElement;

    if (swiperEl?.swiper) {
      const index = swiperEl.swiper.activeIndex; // Miramos qué plato es el que estamos viendo
      
      if (this.platos[index]) {
        const platoActual = this.platos[index];

        // Sacamos un mensaje de color rojo (danger) diciendo que no nos gusta
        const toast = await this.toastCtrl.create({
          message: `${platoActual.nombre} no te gusta`,
          duration: 1000,
          position: 'bottom',
          color: 'danger' 
        });

        await toast.present();
      }
      
      // Pasamos automáticamente al siguiente plato
      swiperEl.swiper.slideNext();
    }
  }

  /* --- BOTÓN: "¡ESTO ME ENCANTA!" (❤️) --- */
  async meGusta() {
    const swiperEl = this.swiperRef?.nativeElement;

    if (swiperEl?.swiper) {
      const index = swiperEl.swiper.activeIndex;
      
      if (this.platos[index]) {
        const platoActual = this.platos[index];

        // ¡Guardamos el plato en nuestra lista secreta de favoritos!
        this.favService.agregarFavorito(platoActual);

        // Sacamos un mensaje de color verde (success) para celebrar
        const toast = await this.toastCtrl.create({
          message: `¡${platoActual.nombre} añadido a favoritos!`,
          duration: 1000,
          position: 'bottom',
          color: 'success'
        });

        await toast.present();
      }

      // Pasamos al siguiente plato para seguir eligiendo
      swiperEl.swiper.slideNext();
    }
  }
}