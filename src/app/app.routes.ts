import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { MedicalPublicationsComponent } from './pages/medical-publications/medical-publications.component';
import { DiagnosticComponent } from './pages/diagnostic/diagnostic.component';
// Import other components when needed

export const routes: Routes = [
  {
     path: '',
     component: HomeComponent 
    },

  { path: 'doctors', 
    component: DoctorsComponent
   },

  { path: 'medical-publications',
     component: MedicalPublicationsComponent
    },

  { path: 'diagnostic',
     component: DiagnosticComponent 
    }
];
 
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }