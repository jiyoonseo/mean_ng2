///<reference path="../../typings.d.ts"/>
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppComponent } from "./app.component";
// bootstrap(AppComponent);

import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
