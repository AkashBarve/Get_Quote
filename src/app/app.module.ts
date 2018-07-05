import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { RequiComponent } from './requi/requi.component';
import { RequirementComponent } from './requirement/requirement.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { RequirementDetailComponent } from './requirement-detail/requirement-detail.component';
import { RequirementCreateComponent } from './requirement-create/requirement-create.component';
import { RequirementEditComponent } from './requirement-edit/requirement-edit.component';
const appRoutes: Routes = [
  {
    path: 'requirements',
    component: RequirementComponent,
    data: { title: 'Requirement List' }
  },
  {
    path: '',
    redirectTo: '/requirements',
    pathMatch: 'full'
  },
  {
    path: 'requirement-details/:id',
    component: RequirementDetailComponent,
    data: { title: 'Requirement Details' }
},
{
  path: 'requirement-create',
  component: RequirementCreateComponent,
  data: { title: 'Create Requirement' }
},
{
  path: 'requirement-edit/:id',
    component: RequirementEditComponent,
    data: { title: 'Edit Requirement' }
}

];
@NgModule({
  declarations: [
    AppComponent,
    RequirementComponent,
    RequirementDetailComponent,
    RequirementCreateComponent,
    RequirementEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
