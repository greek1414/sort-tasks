import { Routes, RouterModule } from '@angular/router';

import { InputCreatorComponent } from './inputcreator/inputcreator.component';

const routes: Routes = [
  { path: '', component: InputCreatorComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
