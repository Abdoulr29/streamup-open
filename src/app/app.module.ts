import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SyncComponent } from './sync.component';
import { AsideComponent } from './aside/aside.component';
@NgModule({
  declarations: [
    SyncComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [SyncComponent]
})
export class AppModule { }
