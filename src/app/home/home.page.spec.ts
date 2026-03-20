/* --- EL ROBOT INSPECTOR (PRUEBAS) --- */

// Traemos las herramientas especiales para revisar que nuestra pieza de LEGO (Component) encaje bien
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Traemos la "página de inicio" que queremos revisar
import { HomePage } from './home.page';

// "Describe" es como ponerle una etiqueta a la caja de herramientas: "Aquí vamos a probar la Home"
describe('HomePage', () => {
  let component: HomePage; // Aquí guardaremos la página que vamos a crear
  let fixture: ComponentFixture<HomePage>; // Esto es como el "laboratorio" donde pondremos la página

  // Antes de cada prueba, preparamos la mesa de trabajo
  beforeEach(async () => {
    // Creamos una copia de la página en nuestro laboratorio de pruebas
    fixture = TestBed.createComponent(HomePage);
    
    // Sacamos la página de la caja para poder tocarla y verla
    component = fixture.componentInstance;
    
    // Le decimos a Angular: "¡Despierta! Mira si hay cambios en los dibujos o colores"
    fixture.detectChanges();
  });

  // Esta es la primera misión del Robot Inspector:
  it('should create', () => {
    // Básicamente pregunta: "¿La página existe y no se ha roto al nacer?"
    // Si "toBeTruthy" es verdad, ¡nuestro robot nos da una medalla verde!
    expect(component).toBeTruthy();
  });
});
