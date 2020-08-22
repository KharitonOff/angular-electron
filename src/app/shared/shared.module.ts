import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { StorageService } from './services';

import { InputModule, ButtonModule, CoreModule as TUCoreModule } from 'truly-ui';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule,
    TranslateModule,
    FormsModule,
    InputModule,
    ButtonModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, StorageService]
})
export class SharedModule { }
