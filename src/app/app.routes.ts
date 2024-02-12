import { Routes } from '@angular/router';
import { MyCalulatorComponent } from './components/my-calulator/my-calulator.component';
import { NotfoundpageComponent } from './navigations/notfoundpage/notfoundpage.component';
import { ObjectlistComponent } from './components/objectList/objectlist/objectlist.component';
import { ObjectdetailsComponent } from './components/objectList/objectdetails/objectdetails.component';

export const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalulatorComponent,
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
  {
    path: 'objectlist',
    component: ObjectlistComponent,
  },
  {
    path: 'objectlist/:id',
    component: ObjectdetailsComponent,
  },
  {
    path: '**',
    component: NotfoundpageComponent,
  },
];
