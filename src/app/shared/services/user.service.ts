/*  UserService provides methods for logging in, 
    registering, to check whether a user is logged in, 
    as well as accessing the data of the logged in user */ 

/* Creates the UserService */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/* imports Angular "core" library modules above and my stuff below */
import { ApiService } from './api.service';
import { User } from '../models';


/* TypeDecorator */
@Injectable()
/* Export the service class */
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private http: Http
  ) {}


  setAuth(user: User) {
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  } // setAuth method


  attemptAuth(type, credentials): Observable<User> {
    let route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
    .map(
      data => {
        this.setAuth(data.user);
        return data;
      }
    );
  } // attemptAuth observable method


  getCurrentUser(): User {
    return this.currentUserSubject.value;
  } // getCurrentUser method
}  // UserService class

/*
The UserService sets a user as a BehaviorSubject and 
saves it as currentUserSubject. setAuth() sets this to our user data 
from attemptAuth() and sets the isAuthenticatedSubject as true. 
The private variables currentUserSubject and isAuthenticatedSubject 
are convereted to a public Observable for use throughout the app. 
Converting the Subject to an Observable prevents any changes 
from being made to the User.
*/
