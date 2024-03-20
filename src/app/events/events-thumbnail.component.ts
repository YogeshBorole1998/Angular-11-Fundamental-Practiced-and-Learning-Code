// Importing necessary decorators and modules from Angular core
import { Component, Input } from '@angular/core';

// Component decorator configuration
@Component({
  // Selector for the component to be used in HTML
  selector: 'event-thumbnail',
  // Template for the component
  template: `
    <!-- Well-styled container for event details -->
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <!-- Event name -->
      <h4>{{ event?.name | uppercase }}</h4>
      <!-- Event date -->
      <div>Date: {{ event?.date | date : 'dd-MMM-yyyy' }}</div>

      <!-- Event time -->
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>

      <!-- Event price -->
      <div *ngIf="event?.price">
        Price: {{ event?.price | currency : 'INR' }}
      </div>

      <!-- Location details -->
      <div>
        <span>Location: {{ event?.location?.address }}</span>
        <!-- Adding padding to the left for better spacing -->
        <span class="pad-left"
          >{{ event?.location?.city }}, {{ event?.location?.country }}</span
        >
      </div>
    </div>
  `,
  // Styles for the component
  styles: [
    `
      /* Styling for the left-padding class */
      .pad-left {
        margin-left: 10px;
      }
      /* Styling for the well div */
      .well div {
        color: #fafad2; /* Setting text color */
      }

      .thumbnail {
        min-height: 210px;
      }
    `,
  ],
})
// EventsThumbnailAppComponent class definition
export class EventsThumbnailAppComponent {
  // Input property to receive event data from parent component
  @Input() event: any;

  logDemoStr() {
    console.log('Demo String..!!');
  }

  someProperty: string = 'Some value';

  getStartTimeStyle() {
    if (this.event && this.event?.time === '8:00 am') {
      return { color: '#FB889E', 'font-weight': 'bold' };
    }
    return {};
  }
}
