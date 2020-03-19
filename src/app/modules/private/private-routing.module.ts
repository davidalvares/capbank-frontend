import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';


const routes: Routes = [
    {
        path: 'admin',
        component: AppComponent,
        data: {
            titulo: 'Início'
        },
        children: [
            {
                path: 'servicos',
                loadChildren: './modules/servicos/servicos.module#ServicosModule',
                data: {
                    breadcrumb: [
                        {
                            titulo: 'Serviços'
                        },
                    ]
                }
            }
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule {
}
