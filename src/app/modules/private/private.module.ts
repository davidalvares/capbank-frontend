import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PrivateRoutingModule } from './private-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { ServicosComponent } from './modules/servicos/servicos/servicos.component';


@NgModule({
    declarations: [
        AppComponent,
        ServicosComponent
    ],
    imports: [
        CommonModule,
        PrivateRoutingModule,
        MatMenuModule,
    ],
    providers: [
        DatePipe
    ]
})
export class PrivateModule { }
