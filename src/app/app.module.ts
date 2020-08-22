import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';

import { AppComponent } from './app.component';

import { InputModule, ButtonModule, CoreModule as TUCoreModule } from 'truly-ui';

import { ClarityModule } from "@clr/angular";
import { StrategyComponent } from './strategy/strategy.component';
import { TradeComponent } from './trade/trade.component';
import { StrategyModule } from './strategy/strategy.module';
import { TradeModule } from './trade/trade.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, StrategyComponent, TradeComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    DetailModule,
    StrategyModule,
    TradeModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // truly-ui
    TUCoreModule.forRoot({ theme: "default" }),
    InputModule,
    ButtonModule,

    ClarityModule,
  ],
  exports: [TradeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
