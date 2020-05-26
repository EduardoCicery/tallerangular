import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './components/header/header.component';
import { CitasComponent } from './components/citas/citas.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'citas', component: CitasComponent},
    {path: 'nosotros', component: NosotrosComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}