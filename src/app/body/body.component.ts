import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  titulo: any = "TITULO";
  @Input("propiedadhijo") datoshijo: any;

  public usuario = {Nombre: "Pepe", Apellido: "Pluma", Edad: 30, Documento: "123456789"};

  eventoBoton() {
    console.log("Se ejecutó el evento indicado para el control");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
