import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';

import { LeftSidebarHostDirective } from './directives/left-sidebar-host.directive';
import { RightSidebarHostDirective } from './directives/right-sidebar-host.directive';
import { BirdComponent } from './components/bird/bird.component';
import { DogComponent } from './components/dog/dog.component';
import { CatComponent } from './components/cat/cat.component';
import { FishComponent } from './components/fish/fish.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarHostDirective,
    RightSidebarHostDirective,
    BirdComponent,
    DogComponent,
    CatComponent,
    FishComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  exports: [
    LeftSidebarHostDirective,
    RightSidebarHostDirective
  ],
  entryComponents: [
    // Dynamic Components
    BirdComponent,
    DogComponent,
    CatComponent,
    FishComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
