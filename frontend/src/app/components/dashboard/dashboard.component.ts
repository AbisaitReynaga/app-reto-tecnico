import { Component, OnInit } from '@angular/core';
import { TransportePublicoService } from '/home/abisait/Documentos/app-reto-tenico/frontend/src/app/services/transporte-publico.service';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  chart: any;
  transporteData: any[] = [];

  constructor(private transporteService: TransportePublicoService) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.transporteService.getAll().subscribe((data: any[]) => {
      this.transporteData = data;
      this.generarGrafico();
    });
  }

  generarGrafico() {
    const labels = this.transporteData.map((d) => d.mes);
    const valores = this.transporteData.map((d) => d.valor);

    this.chart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Valor por mes',
            data: valores,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
      },
    });
  }
}