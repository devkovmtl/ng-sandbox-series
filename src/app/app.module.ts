import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { LogService } from './log.service';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GreetingPipe } from './greeting.pipe';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AppSizerComponent } from './app-sizer/app-sizer.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    GreetingPipe,
    ItemDetailsComponent,
    AppSizerComponent,
    HighlightDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
