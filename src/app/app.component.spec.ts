/* --- EL EXAMEN FINAL DEL GRAN JEFE (APP COMPONENT) --- */

// Traemos las herramientas de examen para montar nuestro laboratorio
import { TestBed } from '@angular/core/testing';
// Traemos los "mapas" de las calles para que la app no se pierda
import { provideRouter } from '@angular/router';
// Traemos al Gran Jefe (AppComponent) para ver si está listo para mandar
import { AppComponent } from './app.component';

// 'describe' es el título del examen: "Prueba de salud de la App Completa"
describe('AppComponent', () => {
  
  // Esta es la misión: "Debería crear la aplicación correctamente"
  it('should create the app', async () => {
    
    // 1. Preparamos la mesa de operaciones
    await TestBed.configureTestingModule({
      // Metemos al Gran Jefe en la sala de pruebas
      imports: [AppComponent],
      // Le damos un mapa vacío para que no se distraiga buscando calles
      providers: [provideRouter([])]
    }).compileComponents(); // Cerramos la puerta del laboratorio y preparamos todo
    
    // 2. Fabricamos una copia real del Gran Jefe
    const fixture = TestBed.createComponent(AppComponent);
    
    // 3. Sacamos al "cerebro" de la app para hablar con él
    const app = fixture.componentInstance;
    
    // 4. LA GRAN PREGUNTA:
    // ¿El Gran Jefe está vivo, respira y funciona bien?
    // Si 'app' existe (es "truthy"), ¡el Gran Jefe aprueba con nota! 
    expect(app).toBeTruthy();
  });
});