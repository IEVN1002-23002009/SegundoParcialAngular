import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'formulario', 
        children:[
            {
            path:'usuario',
            loadComponent:()=>
                import('./formulario/usuario/usuario').then(
                    (c)=>c.Usuario
                )
            },
            {
            path:'zodiaco',
            loadComponent:()=>
                import('./formulario/zodiaco/zodiaco').then(
                    (c)=>c.Zodiaco
                )
            },
           
        ],
    },
    {
        path:'Escuela',
        children:[
             {
            path:'ListaAlumnos',
            loadComponent:()=>
                import('./Escuela/lista-alumnos/lista-alumnos').then(
                    (c)=>c.ListaAlumnos
                )
            },
        ]
    },
    {
        path:'Escuela',
        children:[
             {
            path:'Cinepolis',
            loadComponent:()=>
                import('./Escuela/cinepolis/cinepolis').then(
                    (c)=>c.Cinepolis
                )
            },
        ]
    },
    {
    path:'', redirectTo:'admin',pathMatch:'full'
    },
    {
    path:'""', redirectTo:'admin',
    },
];
