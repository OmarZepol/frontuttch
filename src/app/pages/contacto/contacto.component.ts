import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Solicitud } from '../../models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  agregar: Solicitud = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    descripcion: '',
  };

  solicitud;

  constructor(private formB: FormBuilder, private regSer: SolicitudService) {
    this.solicitud = formB.group({
      nombre: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      telefono: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      asunto: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
   };

  ngOnInit(): void {
  }

  Agregar(){
    this.solicitud.reset({
      nombre: this.solicitud.value.nombre,
      email: this.solicitud.value.email,
      telefono: this.solicitud.value.telefono,
      asunto: this.solicitud.value.asunto,
      descripcion: this.solicitud.value.descripcion,
    })

    const {nombre, email, telefono, asunto, descripcion} = this.solicitud.value;
    this.regSer.registrarSolicutud(nombre,email,telefono,asunto,descripcion).subscribe(res=>console.log(res));
  }


};
