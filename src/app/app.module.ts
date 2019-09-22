import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';

import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    HighlightDirective,
    DateCountPipe,
    QuoteFormComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
