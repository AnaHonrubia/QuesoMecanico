/* --- EL JUEZ DEL CONCURSO DE COCINA (TESTS) --- */

// Traemos las herramientas de examen de Angular para montar nuestro escenario
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Traemos la página de Gastronomía (donde están los platos)
import { GastronomiaPage } from './gastronomia.page'; 

// 'describe' es el nombre del examen: "Revisión de la Cocina de Gastronomía"
describe('GastronomiaPage', () => { 
  
  // Estas son las variables para guardar nuestra página de prueba
  let component: GastronomiaPage; // El cerebro que decide si un plato gusta o no
  let fixture: ComponentFixture<GastronomiaPage>; // El tablero de juego de la página

  /* --- PREPARANDO LOS UTENSILIOS --- */
  // Esto se ejecuta antes de cada prueba para que todo esté impecable
  beforeEach(() => {
    // Le pedimos a Angular que fabrique una copia de la página en el laboratorio
    fixture = TestBed.createComponent(GastronomiaPage);
    
    // Sacamos la lógica (las funciones de 'me gusta' y 'descartar')
    component = fixture.componentInstance;
    
    // ¡Damos el aviso de inicio! Esto carga los platos y prepara el Swiper
    fixture.detectChanges();
  });

  /* --- LA PRUEBA FINAL --- */
  // Esta misión comprueba si la página se "cocina" bien y no se quema
  it('should create', () => {
    
    // Le preguntamos al robot inspector: "¿La página de comida está lista para usarse?"
    // Si 'component' existe y funciona, ¡el juez nos da la estrella Michelin! ⭐✅
    expect(component).toBeTruthy();
  });
});