// Importamos las clases necesarias para manejar rutas.
import { Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ResultsComponent } from './results/results.component';

// Aquí configuramos las rutas disponibles en nuestra aplicación.
export const routes: Routes = [
  {
    path: '', // Ruta raíz, es decir, lo primero que se carga al abrir la app.
    component: UploadComponent // Muestra el componente donde se suben las imágenes.
  },
  {
    path: 'results', // Ruta secundaria, para los resultados.
    component: ResultsComponent // Muestra el componente de los resultados.
  }
];
