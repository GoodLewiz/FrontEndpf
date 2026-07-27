import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Products } from './pages/products/products';
import { Categorias } from './pages/categorias/categorias';
import { Login } from './pages/login/login';

export const routes: Routes = [
{
    path :'',
    component: HomeComponent, //ruta por defecto
},
{
    path :'products',
    component: Products, //ruta por defecto
},
{
    path :'categorias',
    component: Categorias, //ruta por defecto
},
{
    path :'login',
    component: Login, //ruta por defecto
},
{
    path :'**',
    redirectTo :'',
    pathMatch :'full'
}

];
