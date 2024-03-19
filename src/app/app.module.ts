// Importing NgModule decorator and necessary modules from Angular core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importing the AppRoutingModule for routing configuration
import { AppRoutingModule } from './app-routing.module';

// Importing the root component of the application
import { EventsAppComponent } from './events-app.component';

// Importing the components used in the application
import { NavBarComponent } from './nav/nav.component';

// Importing the NgbModule for Bootstrap components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapsibleWellComponent, ToastrService } from './common/index';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';

import {
  EventsListAppComponent,
  EventsThumbnailAppComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  ValidateLocationDirective,
} from './events/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { HttpClientModule } from '@angular/common/http';

// NgModule decorator configuration
@NgModule({
  // Declarations: Components, directives, and pipes used in the module
  declarations: [
    EventsAppComponent,
    EventsListAppComponent,
    EventsThumbnailAppComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    UpvoteComponent,
    ValidateLocationDirective,
    DurationPipe,
  ],

  // Imports: Other modules to be imported
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],

  // Providers: Services to be provided at the module level
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    ToastrService,
    VoterService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],

  // Bootstrap: The root component that Angular creates and inserts into the index.html file
  bootstrap: [EventsAppComponent],
})
// AppModule class definition
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  }
  return true;
}
