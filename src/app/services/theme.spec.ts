/* --- EL TEST DEL ELECTRICISTA (SERVICIO DE TEMA) --- */

// Traemos las herramientas de examen de Angular para montar nuestro laboratorio
import { TestBed } from '@angular/core/testing';

// Traemos a nuestro interruptor mágico (Theme) para ver si está listo para trabajar
import { ThemeService } from './theme';

// 'describe' es el título del examen: "Prueba de funcionamiento del Interruptor de Luz"
describe('ThemeService', () => {
  // Aquí guardaremos a nuestro electricista (el servicio) para las pruebas
  let service: ThemeService;

  // Antes de empezar el examen, preparamos la mesa de trabajo
  beforeEach(() => {
    // Montamos una oficina de pruebas pequeña y vacía
    TestBed.configureTestingModule({});
    // Sacamos el interruptor de la caja y lo conectamos para probarlo
    service = TestBed.inject(ThemeService);
  });

  // La misión número 1 del examen es:
  it('should be created', () => {
    // Le preguntamos al robot inspector: "¿El interruptor se ha fabricado bien y funciona?"
    // Si 'service' existe y no tiene fallos, ¡el inspector nos da una medalla! ✅
    expect(service).toBeTruthy();
  });
});
