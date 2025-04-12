// Importamos lo esencial para iniciar la app.
import { bootstrapApplication } from '@angular/platform-browser'; // Método para inicializar la app.
import { AppComponent } from './app/app.component'; // El componente principal, donde todo empieza.
import { provideRouter } from '@angular/router'; // Nos permite trabajar con las rutas.
import { routes } from './app/app.routes'; // Importamos las rutas que configuramos.

// Bootstrap: Esto es lo que pone la app en marcha.
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Aquí le decimos a Angular que use las rutas definidas en `app.routes.ts`.
}).catch(err => console.error(err)); // Si ocurre algún error durante la inicialización, lo mostramos en la consola.
