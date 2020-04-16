import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSidebarHostDirective } from './directives/left-sidebar-host.directive';
import { RightSidebarHostDirective } from './directives/right-sidebar-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarHostDirective,
    RightSidebarHostDirective
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    LeftSidebarHostDirective,
    RightSidebarHostDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
