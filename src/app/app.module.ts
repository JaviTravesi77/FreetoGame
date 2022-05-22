import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

// import { EmailComposer } from '@ionic-native/email-composer';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ComponentsModule, IonicStorageModule.forRoot(), 
  ],
  providers: [PDFGenerator, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  } , EmailComposer
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
