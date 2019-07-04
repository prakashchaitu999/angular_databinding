import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './scenario1/component1/component1.component';
import { Test1Component } from './scenario2/test1/test1.component';
import { ParentComponent } from './scenario3/parent/parent.component';
import { ChildComponent } from './scenario3/child/child.component';
import { SuperComponent } from './scenario4/super/super.component';
import { SubComponent } from './scenario4/sub/sub.component';
import { RedComponent } from './scenario5/red/red.component';
import { GreenComponent } from './scenario5/green/green.component';
import { BlueComponent } from './scenario5/blue/blue.component';
import { Parent1Component } from './scenario6/parent1/parent1.component';
import { Child1Component } from './scenario6/child1/child1.component';
import { Child2Component } from './scenario6/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Test1Component,
    ParentComponent,
    ChildComponent,
    SuperComponent,
    SubComponent,
    RedComponent,
    GreenComponent,
    BlueComponent,
    Parent1Component,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
