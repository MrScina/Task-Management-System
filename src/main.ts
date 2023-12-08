import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { TasklistComponent } from './app/Component/tasklist/tasklist.component';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
