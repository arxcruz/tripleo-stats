import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ConfigService } from './app/services/config.service';

let base_url = 'http://localhost:5000';

ConfigService.set('chart_api', base_url + '/api/chartdata');
ConfigService.set('categories_api', base_url + '/api/categories');
ConfigService.set('jobs_api', base_url + '/api/joblist/');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
