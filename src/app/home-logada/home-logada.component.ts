import { Component, OnInit, ElementRef } from '@angular/core';
@Component({
  selector: 'app-home-logada',
  templateUrl: './home-logada.component.html',
  styleUrls: ['./home-logada.component.css']
})
export class HomeLogadaComponent implements OnInit {
  getCadastro;
  nameCliente;
  cpfCliente;
  email;
  telefone;
  endereco;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    if (this.getCadastro) {
      this.nameCliente = this.getCadastro['nome'];
      this.cpfCliente = this.getCadastro['cpf'];
      this.email = this.getCadastro['email'];
      this.telefone = this.getCadastro['telefone'];
      this.endereco = this.getCadastro['endereco'];
    }
    console.log(this.cpfCliente);
    console.log(this.nameCliente);
    console.log(this.email);
    console.log(this.telefone);
    console.log(this.endereco);
  }

}
