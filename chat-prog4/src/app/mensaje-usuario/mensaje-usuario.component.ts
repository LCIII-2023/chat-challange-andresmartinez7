import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css',
})
export class MensajeUsuarioComponent {
  @Input() usuario!: string;
  @Output() mensajeEnviado = new EventEmitter<{
    usuario: string;
    texto: string;
  }>();

  mensaje: string = '';

  guardar() {
    if (this.mensaje.trim()) {
      this.mensajeEnviado.emit({ usuario: this.usuario, texto: this.mensaje });
      this.mensaje = '';
    }
  }
}
