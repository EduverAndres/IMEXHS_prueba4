// Este es el componente principal que organiza la navegación entre
// las secciones de la aplicación.

import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { UploadComponent } from './upload/upload.component';
import { ResultsComponent } from './results/results.component';

@Component({
  standalone: true,
  selector: 'app-root', // Este es el punto de entrada de nuestra aplicación.
  imports: [MatTabsModule, UploadComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
