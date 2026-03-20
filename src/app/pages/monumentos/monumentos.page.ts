/* --- EL TOUR DE LOS MONUMENTOS (CONTROLADOR) --- */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Sacamos de la caja las piezas para los títulos, imágenes, botones y tarjetas
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButton, IonCard, IonCardContent, IonIcon, IonMenuButton, IonButtons} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
// El AlertController es el que crea las ventanas flotantes con información
import { AlertController } from '@ionic/angular/standalone'; 
import { addIcons } from 'ionicons'; 
// Elegimos los iconos: el mapa y los dos tipos de corazón (vacío y lleno)
import { map, heart, heartOutline } from 'ionicons/icons'; 

@Component({
  selector: 'app-monumentos',
  templateUrl: './monumentos.page.html',
  styleUrls: ['./monumentos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg, IonButton, RouterLink, IonCard, IonCardContent, IonIcon, IonMenuButton, IonButtons]
})
export class MonumentosPage implements OnInit {

  // Esta variable es como una libreta donde anotamos qué monumentos tienen "Me gusta"
  estadosMeGusta: any = {};

  // Preparamos el controlador de alertas para poder dar explicaciones de los sitios
  constructor(private alertController: AlertController) {
    // Registramos los iconos en nuestro álbum
    addIcons({ map, heart, heartOutline });
  }

  /* --- EL BOTÓN DEL AMOR (CORAZÓN) --- */
  // Esta función hace que el corazón cambie de color cuando lo pulsas
  toggleCorazon(event: Event, nombre: string) {
    // Esto evita que al pulsar el corazón se abra también la ventana de información
    event.stopPropagation(); 
    
    // Si no le habías dado "Me gusta", ahora sí. ¡Y si ya tenía, se lo quitamos!
    if (this.estadosMeGusta[nombre]) {
      this.estadosMeGusta[nombre] = false;
    } else {
      this.estadosMeGusta[nombre] = true;
    }
    
    // Lo chivamos por la consola para que el programador lo vea
    console.log(`Le has dado me gusta a ${nombre}:`, this.estadosMeGusta[nombre]);
  }

/* --- LAS VENTANAS MÁGICAS DE INFORMACIÓN --- */
// Cada función de estas abre un mensaje con la historia de un monumento

// Información de la Calle Ancha (¡muchas tiendas!)
async mostrarInfoAncha() {
  const alert = await this.alertController.create({
    header: 'Centro Comercial Calle Ancha',
    message: 'Es el corazón de las compras en Albacete, ¡tiene de todo!',
    buttons: ['SALIR']
  });
  await alert.present();
}

// Información de la Plaza del Altozano (el centro de la ciudad)
async mostrarInfoAltozano() {
  const alert = await this.alertController.create({
    header: 'Plaza del Altozano',
    message: 'Es el sitio más famoso, con jardines y un refugio de la guerra.',
    buttons: ['SALIR']
  });
  await alert.present();
}

// Información del Pasaje Lodares (¡parece una película!)
async mostrarInfoLodares() {
  const alert = await this.alertController.create({
    header: 'Pasaje Lodares',
    message: 'Una calle con techo de cristal muy antigua y bonita.',
    buttons: ['SALIR']
  });
  await alert.present();
}

// Información del Parque Abelardo Sánchez (el pulmón verde)
async mostrarInfoAbelardo() {
  const alert = await this.alertController.create({
    header: 'Parque Abelardo Sánchez',
    message: 'Es el parque más grande, ¡perfecto para correr y jugar!',
    buttons: ['SALIR']
  });
  await alert.present();
}

// Información del Museo de la Cuchillería (¡cuidado que corta!)
async mostrarInfoMuseo() {
  const alert = await this.alertController.create({
    header: 'Museo de la Cuchillería',
    message: 'Un edificio precioso donde guardan las famosas navajas de Albacete.',
    buttons: ['SALIR']
  });
  await alert.present();
}

// Información de la Puerta de Hierros (la entrada a la fiesta)
async mostrarInfoHierros() {
  const alert = await this.alertController.create({
    header: 'Puerta de Hierros',
    message: 'Es la puerta gigante por donde entramos a la Feria en septiembre.',
    buttons: ['SALIR']
  });
  await alert.present();
}

// Información del Chalet Fontecha
async mostrarInfoFontecha() {
  const alert = await this.alertController.create({
    header: 'Chalet Fontecha',
    message: 'Una casa antigua muy lujosa de hace cien años.',
    buttons: ['SALIR']
  });
  await alert.present();
}

// Información del Refugio Antiaéreo (túneles bajo tierra)
async mostrarInfoRefugio() {
  const alert = await this.alertController.create({
    header: 'Refugio Anti Aéreo',
    message: 'Túneles para esconderse de las bombas hace mucho tiempo.',
    buttons: ['SALIR']
  });
  await alert.present();
}

// Información del Teatro Circo (¡único en el mundo!)
async mostrarInfoCirco() {
  const alert = await this.alertController.create({
    header: 'Teatro Circo',
    message: 'Aquí puedes ver una obra de teatro o ¡un espectáculo de circo!',
    buttons: ['SALIR']
  });
  await alert.present();
}

// Información de la Catedral
async mostrarInfoCatedral() {
  const alert = await this.alertController.create({
    header: 'Catedral',
    message: 'La iglesia más grande e importante de toda la ciudad.',
    buttons: ['SALIR']
  });
  await alert.present();
}

  ngOnInit() {
  }
}
