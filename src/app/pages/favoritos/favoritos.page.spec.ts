/* --- 1. LAS HERRAMIENTAS DEL INSPECTOR --- */
// Traemos las gafas mágicas (TestBed) para ver cómo se comporta nuestra página.
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Traemos el "Baúl de los Tesoros" (FavoritosPage) para ver si se abre bien.
import { FavoritosPage } from './favoritos.page';

/* --- 2. EL INFORME DE REVISIÓN --- */
// 'describe' es como escribir en la carpeta: "Informe de revisión de la zona de Favoritos".
describe('FavoritosPage', () => {
  
  /* --- 3. NUESTRO EQUIPO --- */
  // 'component' es la página con la que vamos a jugar.
  let component: FavoritosPage;
  // 'fixture' es el campo de entrenamiento donde pondremos la página.
  let fixture: ComponentFixture<FavoritosPage>;

  /* --- 4. ¡PREPARADOS, LISTOS...! --- */
  // Esto se hace antes de cada prueba para que no haya trampas y todo esté limpio.
  beforeEach(() => {
    // Le decimos a Angular: "¡Fabrica una página de Favoritos para mi laboratorio!"
    fixture = TestBed.createComponent(FavoritosPage);
    
    // Sacamos la lógica de la página para ver si sabe cocinar los platos.
    component = fixture.componentInstance;
    
    // Le damos al botón de "encender" para que la página cargue los colores y los datos.
    fixture.detectChanges();
  });

  /* --- 5. EL GRAN EXAMEN --- */
  // Esta prueba se llama: "Debería crearse correctamente".
  it('should create', () => {
    
    /* --- 6. LA VERDAD FINAL --- */
    // Miramos si la página de favoritos está ahí. 
    // Si 'component' es de verdad (existe).
    expect(component).toBeTruthy();
  });
});
