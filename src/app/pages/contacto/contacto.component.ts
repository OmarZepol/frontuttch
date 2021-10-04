import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formB: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.formulario = this.formB.group(
      {
        nombre: ['', Validators.required],
        email: ['',[Validators.required, Validators.email]],
        telefono: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
        asunto: ['', Validators.required],
        descripcion: ['', Validators.required]
      }
    );
  }

  save(){
    if(this.formulario.valid){
      console.log(this.formulario.value);
    }
    else{
      console.log('Tu formulario esta mal');
    }
  }

}
