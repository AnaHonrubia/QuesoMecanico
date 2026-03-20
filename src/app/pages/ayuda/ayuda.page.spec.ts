/* --- 1. LAS HERRAMIENTAS DEL DETECTIVE --- */
// Traemos el maletín de herramientas (TestBed) para montar nuestra página en una mesa de pruebas.
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Traemos la "Página de Ayuda" que queremos revisar con lupa.
import { AyudaPage } from './ayuda.page';

/* --- 2. EL CUADERNO DE NOTAS --- */
// 'describe' es como escribir en la portada del cuaderno: "Aquí vamos a investigar la página de Ayuda".
describe('AyudaPage', () => {
  
  /* --- 3. NUESTROS AYUDANTES --- */
  // 'component' es la página de verdad.
  let component: AyudaPage;
  // 'fixture' es como la caja transparente donde metemos el muñeco para que no se escape.
  let fixture: ComponentFixture<AyudaPage>;

  /* --- 4. PREPARANDO EL LABORATORIO --- */
  // Esto se hace antes de CADA prueba, para que todo esté limpio y como nuevo.
  beforeEach(() => {
    // 1. Metemos la página en la caja de pruebas del laboratorio.
    fixture = TestBed.createComponent(AyudaPage);
    
    // 2. Sacamos al "muñeco" (la lógica del código) para poder hablar con él.
    component = fixture.componentInstance;
    
    // 3. ¡Encendemos las luces! Esto hace que la página se despierte y cargue todo.
    fixture.detectChanges();
  });

  /* --- 5. LA MISIÓN PRINCIPAL --- */
  // 'it' es como decir: "Mi misión es comprobar que..." 
  it('should create', () => {
    
    /* --- 6. LA GRAN PREGUNTA --- */
    // Le preguntamos al robot inspector: "¿La página está viva y funciona?"
    // Si 'component' existe y no se ha roto nada, el robot nos da un "¡OK!" gigante.
    expect(component).toBeTruthy();
  });
});
