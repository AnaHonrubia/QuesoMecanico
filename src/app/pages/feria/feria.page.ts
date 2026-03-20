/* --- EL CORAZÓN DE LA FERIA (FERIAGRAM) --- */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Traemos todas las piezas de LEGO de Ionic para que la app se vea profesional
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, 
  IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonButton, 
  IonIcon, IonAvatar, IonItem, IonLabel, IonButtons, IonMenuButton,
  IonFab, IonFabButton, AlertController, ActionSheetController 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
// Elegimos los dibujos: corazones, burbujas de chat, aviones de papel y la cámara
import { heartOutline, chatbubbleOutline, paperPlaneOutline, bookmarkOutline, add, heart, locationOutline, camera, images, close } from 'ionicons/icons'; 
// ¡ESTO ES MAGIA! Traemos el poder de usar la cámara real del móvil
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-feria',
  templateUrl: './feria.page.html',
  styleUrls: ['./feria.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, 
    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, 
    IonImg, IonButton, IonIcon, IonAvatar, IonItem, IonLabel, IonButtons, 
    IonMenuButton, IonFab, IonFabButton
  ]
})
export class FeriaPage implements OnInit {

  /* --- NUESTROS DATOS --- */
  // La lista de todos los días que dura la fiesta
  diasFeria: any[] = [
    { dia: 7, nombre: 'Apertura' }, { dia: 8, nombre: 'Virgen' },
    { dia: 9, nombre: 'Día 9' }, { dia: 10, nombre: 'Día 10' },
    { dia: 11, nombre: 'Día 11' }, { dia: 12, nombre: 'Día 12' },
    { dia: 13, nombre: 'Día 13' }, { dia: 14, nombre: 'Día 14' },
    { dia: 15, nombre: 'Día 15' }, { dia: 16, nombre: 'Día 16' },
    { dia: 17, nombre: 'Cierre' },
  ];

  diaSeleccionado: number = 7; // Empezamos en el día de la cabalgata
  publicacionesVisibles: any[] = []; // Las fotos que se ven ahora mismo
  miUsuario: string = 'Anónimo'; // Tu nombre de feriante

  // La primera foto que aparece, ¡la Puerta de Hierros!
  todasLasPublicaciones: any[] = [
    {
      dia: 7,
      usuario: 'feria_albacete_oficial',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      imagen: 'assets/img/puertaHierrosImagen.jpg', 
      ubicacion: 'Puerta de Hierros',
      descripcion: '¡Ya huele a Feria! 🎡 Todo preparado.',
      likes: 1240,
      meGusta: false,
      comentarios: [] 
    }
  ];

  constructor(
    private alertController: AlertController, // Para ventanas de mensajes
    private actionSheetController: ActionSheetController // Para el menú de "Hacer foto o Galería"
  ) { 
    // Registramos todos los iconos que vamos a usar
    addIcons({ heartOutline, chatbubbleOutline, paperPlaneOutline, bookmarkOutline, add, heart, locationOutline, camera, images, close });
  }

  /* --- AL EMPEZAR... --- */
  ngOnInit() {
    this.cargarDatos(); // Miramos si hay fotos guardadas de antes
    this.seleccionarDia(7); // Mostramos las fotos del día 7
    this.comprobarUsuario(); // Preguntamos: "¿Cómo te llamas?"
  }

  /* --- GESTIÓN DE USUARIO (TU CARNÉT DE FERIANTE) --- */
  async comprobarUsuario() {
    // Miramos en el "cajón" del móvil (localStorage) si ya sabemos tu nombre
    const nombreGuardado = localStorage.getItem('nombreUsuarioFeria');
    if (nombreGuardado) {
      this.miUsuario = nombreGuardado;
    } else {
      this.pedirNombreUsuario(); // Si no, te lo preguntamos con una ventana
    }
  }

  async pedirNombreUsuario() {
    const alert = await this.alertController.create({
      header: 'Bienvenido a la Feria 🎡',
      message: '¿Cómo quieres llamarte en la app?',
      backdropDismiss: false, // No te dejamos cerrar esto hasta que pongas un nombre
      inputs: [{ name: 'nombre', type: 'text', placeholder: 'Tu nombre' }],
      buttons: [{
        text: 'Guardar',
        handler: (data: any) => {
          if (data.nombre && data.nombre.length > 0) {
            this.miUsuario = data.nombre;
            localStorage.setItem('nombreUsuarioFeria', data.nombre); // ¡Guardado para siempre!
            return true; 
          } else { return false; } // No vale dejarlo vacío
        }
      }]
    });
    await alert.present();
  }

  /* --- ACCIONES DE LA APP --- */

  // Cambia las fotos que vemos según el día que pulsemos
  seleccionarDia(dia: number) {
    this.diaSeleccionado = dia;
    this.publicacionesVisibles = this.todasLasPublicaciones.filter(post => post.dia === dia);
  }

  // Corazón rojo al canto (o quitarlo si te arrepientes)
  darMeGusta(post: any) {
    post.meGusta = !post.meGusta;
    post.likes += post.meGusta ? 1 : -1;
  }

  /* --- CÁMARA Y FOTOS --- */

  // Abre el menú de abajo para elegir entre hacer foto o buscar en el álbum
  async nuevoPost() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Subir Recuerdo',
      buttons: [
        { text: 'Hacer Foto', icon: 'camera', handler: () => { this.tomarFoto(CameraSource.Camera); } },
        { text: 'Galería', icon: 'images', handler: () => { this.tomarFoto(CameraSource.Photos); } },
        { text: 'Cancelar', icon: 'close', role: 'cancel' }
      ]
    });
    await actionSheet.present();
  }

  // Conecta con la cámara del móvil de verdad
  async tomarFoto(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: source
      });

      if (image.webPath) {
        this.pedirDescripcion(image.webPath); // Si la foto está ok, pedimos el texto
      }
    } catch (error) { console.log('Cancelado'); }
  }

  // Ventana para escribir qué estamos haciendo en la foto
  async pedirDescripcion(rutaImagen: string) {
    const alert = await this.alertController.create({
      header: 'Describe tu foto 📸',
      inputs: [
        { name: 'texto', type: 'text', placeholder: 'Ej: Comiendo Miguelitos...' },
        { name: 'ubicacion', type: 'text', placeholder: '¿Dónde estás? (Ej: Los Redondeles)' }
      ],
      buttons: [{
        text: 'Publicar',
        handler: (data: any) => {
          this.crearPostFinal(rutaImagen, data.texto, data.ubicacion);
          return true;
        }
      }]
    });
    await alert.present();
  }

  // Metemos la foto nueva al principio de la lista
  crearPostFinal(imagen: string, texto: string, ubicacion: string) {
    const nuevoPost = {
      dia: this.diaSeleccionado,
      usuario: this.miUsuario,
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      imagen: imagen,
      ubicacion: ubicacion || 'Recinto Ferial',
      descripcion: texto || 'Sin descripción',
      likes: 0,
      meGusta: false,
      comentarios: []
    };

    this.todasLasPublicaciones.unshift(nuevoPost); // Al principio de la lista general
    this.publicacionesVisibles.unshift(nuevoPost); // Y al principio de lo que vemos ahora
    this.guardarDatos(); // ¡Guardamos en la memoria del móvil!
  }

  // Función para ver un resumen de lo que es la feria
  async mostrarInfoFeria() {
    const alert = await this.alertController.create({
      header: 'ℹ️ Sobre la Feria',
      subHeader: 'Del 7 al 17 de Septiembre',
      message: '¡La mejor feria del mundo! Con sus Redondeles y su Templete.',
      buttons: ['¡Viva la Feria!']
    });
    await alert.present();
  }

  /* --- EL ARCHIVADOR (LOCALSTORAGE) --- */
  
  // Guarda todas tus fotos en el "disco duro" del móvil
  guardarDatos() {
    localStorage.setItem('postsFeria', JSON.stringify(this.todasLasPublicaciones));
  }

  // Carga tus fotos cuando vuelves a abrir la app
  cargarDatos() {
    const datosGuardados = localStorage.getItem('postsFeria');
    if (datosGuardados) {
      this.todasLasPublicaciones = JSON.parse(datosGuardados);
    }
  }

  /* --- COMENTARIOS --- */
  async comentarPost(post: any) {
    const alert = await this.alertController.create({
      header: 'Nuevo comentario 💬',
      inputs: [{ name: 'comentario', type: 'text', placeholder: 'Escribe aquí...' }],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Publicar',
          handler: (data) => {
            if (data.comentario) {
              if (!post.comentarios) { post.comentarios = []; }
              post.comentarios.push({
                usuario: this.miUsuario,
                texto: data.comentario
              });
              this.guardarDatos(); // Guardamos el comentario para que no se borre
            }
          }
        }
      ]
    });
    await alert.present();
  }
}