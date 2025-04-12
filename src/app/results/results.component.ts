// Este componente se encarga de mostrar los resultados en una tabla.
// Básicamente, toma los datos procesados desde el servicio y los organiza
// para que el usuario pueda verlos de manera clara.

import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { StainAreaService } from '../stain-area.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true, // Esto hace que el componente sea independiente.
  selector: 'app-results', // Así se referenciará este componente en otras partes de la app.
  imports: [MatTableModule, CommonModule], // Importamos los módulos necesarios para la tabla y otras funciones.
  templateUrl: './results.component.html', // Aquí está el HTML que define la vista de este componente.
  styleUrls: ['./results.component.css'] // Y aquí van los estilos CSS específicos.
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ['fileName', 'area'];
  // Define las columnas que tendrá la tabla: una para el nombre del archivo y otra para el área.

  dataSource: any[] = [];
  // Aquí almacenamos los datos que se mostrarán en la tabla. Siempre será un arreglo válido.

  constructor(private stainService: StainAreaService) {
    // Inyectamos el servicio que gestiona los cálculos y resultados.
  }

  ngOnInit() {
    // Este método se ejecuta justo cuando se inicializa el componente.
    this.stainService.results$.subscribe(results => {
      // Nos suscribimos al Observable del servicio para recibir actualizaciones automáticas de los resultados.
      this.dataSource = results || []; // Si `results` es nulo o indefinido, usamos un arreglo vacío.
    });
  }
}
