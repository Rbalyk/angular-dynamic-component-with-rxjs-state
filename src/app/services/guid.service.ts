import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuidService {

  generateGUID(): string {
    const guid = (
      this.chunk() + '-' + this.chunk() + '-4' + this.chunk().substr(0, 3) + '-' + this.chunk() + '-' + this.chunk()
    ).toLowerCase();

    return guid;
  }

  private chunk(): string {
    // tslint:disable-next-line: no-bitwise
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
}
