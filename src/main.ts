/*
* File: main.ts
* Author: Sangare F. Felisha
* Copyright: 2023, Sangare F. Felisha
* Group: Szoft II N
* Date: 2023-03-07
* Github: https://github.com/fe-ktch/
* Licenc: GNU GPL
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
