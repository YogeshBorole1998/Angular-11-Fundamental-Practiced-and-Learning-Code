// Importing Component decorator from Angular core module
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared';

// Component decorator configuration
@Component({
  // Template file path for the component
  templateUrl: './events-list.component.html',
})
// EventsListAppComponent class definition
export class EventsListAppComponent implements OnInit {
  /* If you're confident that the event property will be assigned a value during the ngOnInit lifecycle, 
  you can use the non-null assertion operator (!) to tell TypeScript not to worry about initialization. */
  events!: IEvent[];

  constructor(private toastr: ToastrService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
