// Este servicio maneja la lógica de los cálculos y almacena los resultados para que otros
// componentes puedan utilizarlos fácilmente.

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Esto significa que el servicio estará disponible en toda la aplicación.
})
export class StainAreaService {
  private resultsSubject = new BehaviorSubject<any[]>([]);
  // Almacena los resultados procesados, iniciando con un arreglo vacío.

  results$: Observable<any[]> = this.resultsSubject.asObservable();
  // Exponemos los resultados como un Observable, para que otros componentes puedan suscribirse.

  constructor() {}

  calculateArea(file: File, points: number): Observable<{ area: number; fileName: string }> {
    // Este método calcula el área basándose en la imagen subida y el número de puntos generados.
    return new Observable(observer => {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        const width = img.width;
        const height = img.height;
        const totalImageArea = width * height;

        // Simulamos puntos dentro de la mancha.
        const ni = Math.floor(points * 0.3);
        const area = totalImageArea * (ni / points);

        const currentResults = this.resultsSubject.value;
        this.resultsSubject.next([...currentResults, { fileName: file.name, area }]);

        observer.next({ area, fileName: file.name });
        observer.complete();
      };

      img.onerror = () => {
        observer.error('No se pudo cargar la imagen.');
      };
    });
  }
}
