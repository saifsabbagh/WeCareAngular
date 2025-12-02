import { ApplicationConfig, Component, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-search-bar',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './search-bar.component.html',
//   styleUrls: ['./search-bar.component.scss']
// })
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
