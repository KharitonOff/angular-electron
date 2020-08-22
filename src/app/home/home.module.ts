import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { InputModule, ButtonModule } from 'truly-ui';

import { ClrInputModule } from "@clr/angular";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, InputModule, ButtonModule, ClrInputModule]
})
export class HomeModule { }
