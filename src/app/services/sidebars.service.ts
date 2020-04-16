import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SidebarsInterface } from '../interfaces/sidebars.interface';
import { GuidService } from './guid.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarsService {

  sidebarsState$: Observable<any>;

  private sidebarsStateSubject: BehaviorSubject<any>;
  private sidebarsState: any = null;

  constructor(private guidService: GuidService) {
    this.sidebarsStateSubject = new BehaviorSubject(this.sidebarsState) as BehaviorSubject<SidebarsInterface>;
    this.sidebarsState$ = this.sidebarsStateSubject.asObservable();
  }

  getDefaultSidebarsState(): Observable<SidebarsInterface> {
    return of({
      id: this.guidService.generateGUID(),
      settings: {
        leftSidebar: {
          components: [
            {
              id: '854c-6bea6-48c4-f0a3-5c34',
              type: 'CatComponent',
              title: 'Cat',
              target: 'leftSidebar'
            },
            {
              id: '854c-6bra6-48c4-f0a3-5c34',
              type: 'DogComponent',
              title: 'Dog',
              target: 'leftSidebar'
            }
          ]
        },
        rightSidebar: {
          components: [
            {
              id: '854c-6bwa6-48c4-f0a3-5c34',
              type: 'BirdComponent',
              title: 'Bird',
              target: 'leftSidebar'
            },
            {
              id: '854c-6bsa6-48c4-f0a3-5c34',
              type: 'FishComponent',
              title: 'Fish',
              target: 'leftSidebar'
            },
          ]
        }
      }
    }).pipe(tap((form: any) => this.updateOutsideFormState(form)));
  }

  updateOutsideFormState(sidebar: SidebarsInterface) {
    this.sidebarsState = sidebar;
    this.sidebarsStateSubject.next(sidebar);
  }
}
