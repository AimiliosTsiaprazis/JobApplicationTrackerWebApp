import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl = 'http://localhost:3306/applications';

  constructor(private http: HttpClient) {}

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiUrl);
  }

  addApplication(
    app: Omit<Application, 'id'>
  ): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, app);
  }
}
