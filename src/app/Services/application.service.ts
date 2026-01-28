import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl = 'http://localhost:3000/applications';

  constructor(private http: HttpClient) {}
  
  addApplication(
    app: Omit<Application, 'id'>
  ): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, app);
  }
  
  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiUrl);
  }

}
