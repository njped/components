import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BobComponent } from './bob/bob.component';
import {MatCardModule} from '@angular/material/card'
import { ExampleDogComponent } from './example-dog/example-dog.component';

@NgModule({
  declarations: [		
    AppComponent,
    BobComponent,
    // ExampleDogComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
