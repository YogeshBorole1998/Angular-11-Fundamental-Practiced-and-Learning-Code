// Importing necessary components
import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import {
  EventDetailsComponent,
  EventsListAppComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
} from './events/index';

// Configuration of Angular routes using the RouterModule
export const appRoutes: Routes = [
  // Route for creating a new event
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'], // De-Activate the route activator for this route
  },

  // Route for displaying the list of events
  {
    path: 'events',
    component: EventsListAppComponent,
    resolve: { events: EventListResolver },
  },

  // Route for displaying detailed information about a specific event
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator], // Activate the route activator for this route
  },

  // Default route: Redirect to the 'events' route if the path is empty
  { path: '', redirectTo: '/events', pathMatch: 'full' },

  // Route for displaying the 404 page
  {
    path: '404',
    component: Error404Component,
  },

  // When a route start with '/user', load the UserModule from './user/user.module' this path.
  // The lazy loaded module will be inject
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },

  {
    path: 'events/sessions/new',
    component: CreateSessionComponent,
  },
];
