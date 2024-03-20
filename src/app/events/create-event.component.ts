import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from './shared/index';

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #ffff00;
        padding-left: 10px;
        font-size: 13px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent {
  isDirty: boolean = true;
  newEvent: any = {
    location: {},
  };

  constructor(private router: Router, private eventService: EventService) {}

  saveEvent(formValues: IEvent) {
    this.eventService.saveEventService(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
