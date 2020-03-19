import { ModalDepositoComponent } from './../shared/modal-deposito/modal-deposito.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  
  valor: string;

  constructor(public dialog: MatDialog) {}
  
  ngOnInit(){
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDepositoComponent, {
      width: '250px',
      data: {name: this.valor}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.valor = result;
    });
  }

}

