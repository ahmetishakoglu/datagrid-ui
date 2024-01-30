import {Routes} from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {DatagridComponent} from "./core/components/datagrid/view/datagrid.component";
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'datagrid',
    component: DatagridComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
