import { Transferencia } from './../models/transferencia.models';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  standalone: false,
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent implements OnInit{

  transferencias: any[];

  constructor( private service: TransferenciaService) {}

  ngOnInit(){
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;

    });
  }

}
