import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DetailsServiceService {

  constructor(private http: HttpClient) { 

  }
  configUrl = 'http://localhost:3000/users'

  addDetails(details) {
    return this.http.post(this.configUrl, details);
  }

}
