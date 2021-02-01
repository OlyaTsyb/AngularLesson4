import {Injectable} from '@angular/core';
import {Resolve} from "@angular/router";
import {User} from "../models/User";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]> {

  constructor(private userServices: UserService) {
  }

  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    console.log(this.userServices.getUser());
    return this.userServices.getUser();
  }

}
