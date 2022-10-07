import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  estudiantes : any[] = [];
  formulario = this.formBuilder.group({
    Nombre: ['', [Validators.required]],
    FechaDeNacimiento: ['', [Validators.required, this.validarEdad]],
    Documento: ['', [Validators.required]],
    Celular: ['', [Validators.required]],
    Localidad: ['', [Validators.required]],
  });

  constructor(

    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.estudiantes.push(this.formulario.value);
    console.log(this.estudiantes.length);

    alert("Excelente!");
    
  }

  validarEdad (control: AbstractControl) {

    var fechaDeNacimiento = new Date(control.value);
    let hoy : Date = new Date();

    if (Math.floor((hoy.getTime() - fechaDeNacimiento.getTime()) / (1000 * 3600 * 24) / 365) < 18){
        console.log("con moment es mas facil");
      return { errorEdad: true };
    }

    return null;

  }


}
