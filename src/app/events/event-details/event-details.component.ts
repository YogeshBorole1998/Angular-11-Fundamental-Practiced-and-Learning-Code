import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent, Session } from '../shared';
import { EventService } from '../shared/event.service';

// Component decorator configuration
@Component({
  selector: 'events-list',
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }

      .event-image {
        height: 100px;
      }

      a {
        cursor: pointer;
      }

      .btn-rounded {
        border-radius: 15px;
        font-size: 14px;
        padding: 5px 10px;
      }
    `,
  ],
})
export class EventDetailsComponent implements OnInit {
  /* If you're confident that the event property will be assigned a value during the ngOnInit lifecycle, 
  you can use the non-null assertion operator (!) to tell TypeScript not to worry about initialization. */
  event: IEvent | undefined;
  addMode!: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: Session) {
    // Check if this.event or this.event.sessions is undefined
    if (!this.event || !this.event.sessions) {
      console.error('Event or sessions array is undefined.');
      return;
    }

    // Get the maximum session ID or default to 0 if sessions array is empty
    const nextId = Math.max(...this.event.sessions.map((s) => s.id ?? 0)) + 1;

    // Assign the next ID to the session
    session.id = nextId;

    // Push the new session to the sessions array
    this.event.sessions.push(session);

    // Update the event using the event service
    this.eventService.updateEvent(this.event);

    // Set addMode to false to exit the add mode
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
