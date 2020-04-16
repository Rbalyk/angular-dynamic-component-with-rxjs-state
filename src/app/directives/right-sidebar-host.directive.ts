import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cs-right-sidebar-host]',
})
export class RightSidebarHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
