import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import 'ids-enterprise-wc/components/ids-text/ids-text';

import {
  SohoPersonalizeDirective,
  SohoRenderLoopService,
  SohoApplicationMenuComponent,
  SohoAccordionComponent,
  SohoSearchFieldComponent,
  SohoModuleNavContainerComponent,
  SohoModuleNavSwitcherComponent,
  SohoModuleNavSettingsComponent,
  SohoModuleNavComponent
} from 'ids-enterprise-ng';
import { Router } from '@angular/router';



@Component({
  selector: 'body', // eslint-disable-line
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}
