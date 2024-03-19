import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // Checking if the event with the given ID exists
    const eventExist = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExist) {
      // Redirecting to the 404 page if the event doesn't exist
      this.router.navigate(['/404']);
    }

    return eventExist; // Allowing access if the event exists
  }
}
