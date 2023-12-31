import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Person } from './person';


@Injectable({
  providedIn: 'root'
})
export class DatenServiceService {

  private baseUrl = "http://localhost:8080/getPersons";

  constructor(private httpClient: HttpClient) {  }

  getPersonsList(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(`${this.baseUrl}`)
  }
}
