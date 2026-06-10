import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LicensePlateListComponent } from './admin/license-plate-list/license-plate-list.component';
import { LicensePlateFormComponent } from './admin/license-plate-form/license-plate-form.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: LicensePlateListComponent },
      { path: 'create', component: LicensePlateFormComponent },
      { path: 'edit/:id', component: LicensePlateFormComponent }
    ]
  }
];



