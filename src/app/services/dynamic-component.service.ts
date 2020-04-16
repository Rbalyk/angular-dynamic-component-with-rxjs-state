import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

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

  getDefaultPaletteComponents(): Observable<any> {
    return of([
      {
        title: 'LeftSidebar',
        components: [
          {
            type: 'Cat',
            title: 'Cat Dynamic Component',
          },
          {
            type: 'Dog',
            title: 'Dog Dynamic Component',
          }
        ]
      },
      {
        title: 'RightSidebar',
        components: [
          {
            type: 'Bird',
            title: 'Bird Dynamic Component',
          },
          {
            type: 'Fish',
            title: 'Fish Dynamic Component',
          }
        ]
      },
    ]);
  }
}