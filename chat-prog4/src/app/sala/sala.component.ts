import { Component } from '@angular/core';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  usuario1= 'Jose'
  usuario2= 'Maria'
  
  mensajes: { usuario: string; texto: string }[] = [];
  
  agregarMensaje(mensaje: { usuario: string; texto: string }) {
    this.mensajes.push(mensaje);
  }
}
