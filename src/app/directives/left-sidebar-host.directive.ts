import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cs-left-sidebar-host]',
})
export class LeftSidebarHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
