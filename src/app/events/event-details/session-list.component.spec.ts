import { AuthService } from 'src/app/user/auth.service';
import { Session } from '../shared';
import { SessionListComponent } from './session-list.component';
import { VoterService } from './voter.service';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService: AuthService, mockVoterService: VoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      component.sessions = <Session[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'intermediate' },
        { name: 'session 3', level: 'beginner' },
      ];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
      expect(component.visibleSessions).toEqual([
        component.sessions[0], // 'session 1'
        component.sessions[1], // 'session 2'
      ]);
    });

    it('should sort the sessions correctly', () => {
      component.sessions = <Session[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 3', level: 'intermediate' },
        { name: 'session 2', level: 'beginer' },
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(3);
      expect(component.visibleSessions[2].name).toBe('session 3');
    });
  });
});
