// Este componente permite al usuario subir una imagen binaria,
// elegir la cantidad de puntos aleatorios y calcular el área de la mancha.

import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { StainAreaService } from '../stain-area.service';

@Component({
  standalone: true, // Componente independiente, fácil de usar en otras partes.
  selector: 'app-upload', // El nombre que usaremos para este componente en las vistas.
  imports: [MatSliderModule, MatButtonModule, FormsModule],
  templateUrl: './upload.component.html', // El archivo HTML que define su diseño.
  styleUrls: ['./upload.component.css'] // Archivo CSS para personalizar su estilo.
})
export class UploadComponent {
  file: File | null = null;
  // Aquí almacenamos el archivo que el usuario selecciona.

  points: number = 1000;
  // Representa el número de puntos aleatorios que se usarán para calcular el área.

  constructor(private stainService: StainAreaService) {
    // Inyectamos el servicio que realiza los cálculos de área.
  }

  onFileSelected(event: any) {
    // Este método se ejecuta cuando el usuario selecciona un archivo.
    this.file = event.target.files[0]; // Guardamos el archivo seleccionado.
  }

  calculateArea() {
    // Este método se dispara cuando el usuario hace clic en "Calcular Área".
    if (this.file) {
      // Verificamos que haya un archivo seleccionado.
      this.stainService.calculateArea(this.file, this.points).subscribe(result => {
        // Llamamos al servicio para calcular el área y mostramos un mensaje con el resultado.
        alert(`El área estimada para ${result.fileName} es ${result.area.toFixed(2)} píxeles.`);
      });
    } else {
      alert('Por favor, selecciona un archivo primero.'); // Mensaje si no hay archivo.
    }
  }
}
