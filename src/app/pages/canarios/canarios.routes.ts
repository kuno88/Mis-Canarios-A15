import { Routes } from "@angular/router";
import { CanarioAddComponent } from "./canario-add/canario-add.component";
import { CanarioEditComponent } from "./canario-edit/canario-edit.component";
import { CanarioListComponent } from "./canario-list/canario-list.component";

export const CanariosRoutes : Routes = [
    {path:'',redirectTo:'list',pathMatch:'full'},
    { path:'list',title:'Lista', component:CanarioListComponent},
    { path:'add',title:'Agregar',component:CanarioAddComponent},
    { path:'edit',title:'Editar', component:CanarioEditComponent}
]