import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputCreatorComponent } from './inputcreator/inputcreator.component';
import { SorterComponent } from './sorter/sorter.component';

import { appRoutingModule } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, appRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InputCreatorComponent,
    SorterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
