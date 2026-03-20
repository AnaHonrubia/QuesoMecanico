/* --- EL CONTROL DE CALIDAD DE "FERIAGRAM" --- */

// Traemos las herramientas de examen de Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Traemos nuestra página de la Feria (la que tiene las fotos y la cámara)
import { FeriaPage } from './feria.page';

// 'describe' es el título del examen: "Prueba de funcionamiento de la Feria"
describe('FeriaPage', () => {
  
  // Estas son las variables para guardar nuestra página de prueba
  let component: FeriaPage; // El cerebro del código
  let fixture: ComponentFixture<FeriaPage>; // El escenario donde ocurre la magia

  /* --- PREPARANDO EL RECINTO FERIAL --- */
  // Antes de cada prueba, montamos la página de cero
  beforeEach(() => {
    // Creamos la página en nuestro laboratorio de pruebas
    fixture = TestBed.createComponent(FeriaPage);
    
    // Sacamos la lógica (las funciones de dar likes, subir fotos, etc.)
    component = fixture.componentInstance;
    
    // ¡Encendemos la app! Esto hace que se ejecute el ngOnInit y cargue los días
    fixture.detectChanges();
  });

  /* --- LA PRUEBA DE FUEGO --- */
  // Esta prueba mira si la página "nace" bien sin errores
  it('should create', () => {
    
    // Le preguntamos al inspector: "¿Se ha cargado todo bien?"
    // Si 'component' existe (es "truthy"), ¡significa que podemos irnos de Feria! 🎡✅
    expect(component).toBeTruthy();
  });
});
