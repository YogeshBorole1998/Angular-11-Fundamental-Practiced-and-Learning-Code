import { AuthService } from 'src/app/user/auth.service';
import { SessionListComponent } from './session-list.component';
import { VoterService } from './voter.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { DurationPipe } from '../shared/duration.pipe';
import { CollapsibleWellComponent } from 'src/app/common/collapsible-well.component';
import { UpvoteComponent } from './upvote.component';
import { By } from '@angular/platform-browser';

describe('SessionListComponent', () => {
  let mockAuthService,
    mockVoterService,
    fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugElement: DebugElement;

  beforeEach(() => {
    // Mock AuthService and VoterService
    mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { userName: 'Yogesh' },
    };
    mockVoterService = { userHasVoted: () => true };

    TestBed.configureTestingModule({
      // Declare the components and pipes used in the test
      declarations: [
        SessionListComponent,
        DurationPipe,
        CollapsibleWellComponent,
        UpvoteComponent,
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
      ],
      // Suppress unknown element errors
      schemas: [NO_ERRORS_SCHEMA],
    });

    // Create a component fixture
    fixture = TestBed.createComponent(SessionListComponent);
    // Get the component instance
    component = fixture.componentInstance;
    // Get the native element
    element = fixture.nativeElement;
    // Get the debug element
    debugElement = fixture.debugElement;
  });

  describe('Initial Display', () => {
    it('should have the correct name', () => {
      // Arrange: Set up component data
      component.sessions = [
        {
          name: 'Session 1',
          id: 3,
          presenter: 'Yogesh',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'bob'],
        },
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.ngOnChanges(); // Trigger change detection

      // Act: Perform action (detect changes)
      fixture.detectChanges();

      // Assert: Check if the element contains the correct text content
      expect(element.querySelector('[well-title]')?.textContent).toContain(
        'Session 1'
      );
      // Assert using debugElement
      expect(
        debugElement.query(By.css('[well-title]')).nativeElement.textContent
      ).toContain('Session 1');
    });
  });
});
