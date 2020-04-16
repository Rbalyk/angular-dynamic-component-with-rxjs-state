import {Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LeftSidebarHostDirective} from './directives/left-sidebar-host.directive';
import {RightSidebarHostDirective} from './directives/right-sidebar-host.directive';
import {DynamicComponentService} from './services/dynamic-component.service';
import {Subscription} from 'rxjs';
import {SidebarsService} from './services/sidebars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(LeftSidebarHostDirective, {static: true}) leftSidebarHost: LeftSidebarHostDirective;
  @ViewChild(RightSidebarHostDirective, {static: true}) rightSidebarHost: RightSidebarHostDirective;
  @ViewChild('leftSidebar', { static: true }) leftSidebarRef: ElementRef;
  @ViewChild('rightSidebar', { static: true }) rightSidebarRef: ElementRef;

  private subscription = new Subscription();

  constructor(
    private dynamicComponentListService: DynamicComponentService,
    private resolver: ComponentFactoryResolver,
    private sidebarsService: SidebarsService) {
  }

  ngOnInit(){
    const sidebarsStateStream$ = this.sidebarsService.getDefaultSidebarsState().subscribe((sidebar: any) => {
      this.buildSidebar(sidebar);
    });

    this.subscription.add(sidebarsStateStream$);
  }

  private buildSidebar(sidebar): void {
    console.log(sidebar);
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
  }

}
