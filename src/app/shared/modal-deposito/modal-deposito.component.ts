import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-deposito',
  templateUrl: './modal-deposito.component.html',
  styleUrls: ['./modal-deposito.component.css']
})


export class ModalDepositoComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(){   
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalDepositoComponent, {
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


