import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { EnrollService } from './Services/enroll.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), EnrollService]
};
