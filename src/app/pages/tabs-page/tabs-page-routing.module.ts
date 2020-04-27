import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';
import { GruposPageModule } from '../grupos/grupos.module';
import { HorariosPageModule } from '../horarios/horarios.module';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'grupos',
        children: [
          {
            path: '',
            loadChildren: () => import('../grupos/grupos.module').then(m => GruposPageModule)
          }
        ]
      },
      {
        path: 'horarios',
        children: [
          {
            path: '',
            loadChildren: () => import('../horarios/horarios.module').then(m => HorariosPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

