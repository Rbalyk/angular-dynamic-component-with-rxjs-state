import { Injectable } from '@angular/core';

import { DynamicComponentList } from './dynamic-component-list';

// Dynamic Components
import { BirdComponent } from '../components/bird/bird.component';
import { CatComponent } from '../components/cat/cat.component';
import { DogComponent } from '../components/dog/dog.component';
import { FishComponent } from '../components/fish/fish.component';

@Injectable({
  providedIn: 'root',
})

export class DynamicComponentService extends DynamicComponentList {

  protected list() {
    return {
      BirdComponent,
      CatComponent,
      DogComponent,
      FishComponent
    };
  }

}
