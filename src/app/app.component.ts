import {Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {switchMap} from "rxjs/operators";
import {moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

import {LeftSidebarHostDirective} from './directives/left-sidebar-host.directive';
import {RightSidebarHostDirective} from './directives/right-sidebar-host.directive';
import {DynamicComponentService} from './services/dynamic-component.service';
import {SidebarsService} from './services/sidebars.service';
import {SidebarsInterface} from "./interfaces/sidebars.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  @ViewChild(LeftSidebarHostDirective, {static: true}) leftSidebarHost: LeftSidebarHostDirective;
  @ViewChild(RightSidebarHostDirective, {static: true}) rightSidebarHost: RightSidebarHostDirective;
  @ViewChild('leftSidebar', { static: true }) leftSidebarRef: ElementRef;
  @ViewChild('rightSidebar', { static: true }) rightSidebarRef: ElementRef;

  sidebars: SidebarsInterface;
  leftSidebarComponents: any;
  rightSidebarComponents: any;

  private subscription = new Subscription();

  constructor(
    private dynamicComponentListService: DynamicComponentService,
    private resolver: ComponentFactoryResolver,
    private sidebarsService: SidebarsService) {
  }

  ngOnInit(){
    const sidebarsStateStream$ = this.sidebarsService.getDefaultSidebarsState().pipe(
      switchMap(() => {
        return this.sidebarsService.sidebarsState$;
      })
    ).subscribe((sidebar: any) => {
      this.buildSidebar(sidebar);
    });
    this.subscription.add(sidebarsStateStream$);
  }

  drop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.sidebarsService.updateOutsideSidebarState(this.sidebars);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.sidebarsService.updateOutsideSidebarState(this.sidebars);
    }
  }

  private buildSidebar(sidebar): void {
    this.sidebars = sidebar;
    this.leftSidebarComponents = sidebar.settings.leftSidebar.components;
    this.rightSidebarComponents = sidebar.settings.rightSidebar.components;
    this.leftSidebarHost.viewContainerRef.clear();
    this.rightSidebarHost.viewContainerRef.clear();

    for (const component of sidebar.settings.leftSidebar.components) {
      try {
        this.initComponentFactory(component, this.leftSidebarHost);
      } catch (error) {
        console.log('For use component before create plz');
      }
    }

    for (const component of sidebar.settings.rightSidebar.components) {
      try {
        this.initComponentFactory(component, this.rightSidebarHost);
      } catch (error) {
        console.log('For use component before create plz');
      }
    }
  }

  private initComponentFactory(component, host) {
    const cmp = this.dynamicComponentListService.getComponentByAlias(component.type);
    const componentFactory = this.resolver.resolveComponentFactory(cmp);

    const componentRef = host.viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as any).leftSidebarRef = this.leftSidebarRef;
    (componentRef.instance as any).rightSidebarRef = this.rightSidebarRef;
  }

}
