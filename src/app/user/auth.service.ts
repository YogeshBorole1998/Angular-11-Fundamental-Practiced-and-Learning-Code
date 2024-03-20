import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  // Property to hold the current user information
  currentUser!: IUser | undefined;

  // Method to simulate user login
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Yogesh',
      lastName: 'Borole',
    };
  }

  // Method to check if a user is authenticated
  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    if (this.currentUser) {
      this.currentUser.firstName = firstName;
      this.currentUser.lastName = lastName;
    }
  }

  logout() {
    this.currentUser = undefined;
    window.alert('Logged Out Successfully!');
  }
}
