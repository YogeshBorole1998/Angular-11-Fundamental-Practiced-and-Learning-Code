import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
    `
      // Headings & text-font-size inside the Navbar
      .nav.navbar-nav {
        font-size: 15px;
      }

      // Search-Box in Navbar
      #searchForm {
        margin-right: 100px;
      }

      // Hide a search-form if the browser window get too small.
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }

      li > a.active {
        color: #adff2f;
      }
    `,
  ],
})
export class NavBarComponent {
  constructor(public auth: AuthService) {}
}
