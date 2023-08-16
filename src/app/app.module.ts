import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
 
import {HttpClientModule} from "@angular/common/http";
 


import { Template4Component } from './template4/template4.component';
import { ReactiveFormComponent } from './reactive/reactive.component';
import { Databinding3Component } from './databinding3/databinding3.component';
import { TemplateComponent } from './template/template.component';
import { MrMrsPipe } from './pipe/mr-mrs.pipe';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TemplatCrudComponent } from './templat-crud/templat-crud.component';
import { PipComponent } from './pip/pip.component';
import { ServiceComponent } from './service/service.component';
import { ObsPorComponent } from './obs-por/obs-por.component';
import { RxjsComponent } from './rxjs/rxjs.component';
     



 
@NgModule({
  declarations: [
    AppComponent,   
    
   Databinding3Component,
        
     Template4Component,
     //  ChildLifecycleComponent,
    DirectiveComponent,
  
     
  
     
    // DataServiceDirective,
    //  Template4Component,
    ReactiveFormComponent,
    TemplateComponent,
    MrMrsPipe,
    LifecycleComponent,
    TemplatCrudComponent,
    PipComponent,
    ServiceComponent,
    ObsPorComponent,
    RxjsComponent,
        

      
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule,
  ],

    
 
  
  providers: [],
  
  bootstrap: [AppComponent]
})
  export class  AppModule { }
  







