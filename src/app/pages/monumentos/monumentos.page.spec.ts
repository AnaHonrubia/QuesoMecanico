/* --- EL INSPECTOR DE TURISMO (PRUEBAS) --- */

// Traemos las herramientas de examen de Angular para montar nuestro escenario de pruebas
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Traemos la página de Monumentos que queremos revisar con lupa
import { MonumentosPage } from './monumentos.page';

// 'describe' es el título del examen: "Revisión de la Ruta de Monumentos"
describe('MonumentosPage', () => {
  
  // Estas son las variables para guardar nuestra página de prueba
  let component: MonumentosPage; // El cerebro que guarda los "me gusta"
  let fixture: ComponentFixture<MonumentosPage>; // El tablero donde se ven las fotos

  /* --- PREPARANDO LA VISITA GUIADA --- */
  // Esto se hace antes de cada prueba para que todo esté limpio y ordenado
  beforeEach(() => {
    // Le pedimos a Angular que fabrique una copia de la página en el laboratorio
    fixture = TestBed.createComponent(MonumentosPage);
    
    // Sacamos la lógica (las funciones de los corazones y las alertas)
    component = fixture.componentInstance;
    
    // ¡Damos la señal de inicio! Esto hace que la página cargue los iconos y se prepare
    fixture.detectChanges();
  });

  /* --- LA PRUEBA DE FUEGO --- */
  // Esta misión comprueba si la página se crea bien y no se queda colgada
  it('should create', () => {
    
    // Le preguntamos al robot inspector: "¿La página de monumentos está lista para los turistas?"
    // Si 'component' existe y funciona, ¡el inspector nos da el visto bueno! ✅🏛️
    expect(component).toBeTruthy();
  });
});
