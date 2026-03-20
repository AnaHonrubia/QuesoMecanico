/* --- EL TEST DEL CARTERO (SERVICIO) --- */

// Traemos las herramientas de examen de Angular
import { TestBed } from '@angular/core/testing';

// Traemos a nuestro cartero (Favoritos) para ver si está listo
import { FavoritosService } from './favoritos';

// 'describe' es como poner el título al examen: "Prueba de salud del Servicio Favoritos"
describe('FavoritosService', () => {
  // Aquí guardaremos a nuestro cartero para las pruebas
  let service: FavoritosService;

  // Antes de empezar el examen, preparamos la oficina
  beforeEach(() => {
    // Creamos una oficina de pruebas pequeña
    TestBed.configureTestingModule({});
    // Llamamos al cartero y lo ponemos en su sitio
    service = TestBed.inject(FavoritosService);
  });

  // La primera pregunta del examen es:
  it('should be created', () => {
    // Básicamente le preguntamos al robot inspector: "¿El cartero ha venido a trabajar?"
    // Si 'service' existe (es "truthy"), ¡el cartero aprueba el examen! ✅
    expect(service).toBeTruthy();
  });
});