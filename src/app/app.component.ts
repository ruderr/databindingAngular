import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codigointeractivo';
  Nombre: string = "José";
  datos: any = {Nombre: "Pepe", Apellido: "Pluma", Edad: 30, Documento: "123456789"};
}
