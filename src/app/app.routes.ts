import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

export const appRoutes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'canarios',loadChildren:()=>import('./pages/canarios/canarios.routes').then(routes=>routes.CanariosRoutes)},
    {path:'**', redirectTo:'home'}
]