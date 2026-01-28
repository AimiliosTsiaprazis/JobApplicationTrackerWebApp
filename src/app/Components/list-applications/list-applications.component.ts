import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicationService } from '../../services/application.service';
import { Application } from '../../models/application.model';

@Component({
  selector: 'app-list-applications',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-applications.component.html',
  styleUrls: ['./list-applications.component.css']
})
export class ListApplicationsComponent {
  applications$: Observable<Application[]>;

  constructor(private appService: ApplicationService) {
    this.applications$ = this.appService.getApplications();
  }

  getStatusClass(status: string): string {
  if (!status) return '';
  switch (status.toLowerCase()) {
    case 'applied': return 'applied';
    case 'interview': return 'interview';
    case 'offer': return 'offer';
    case 'rejected': return 'rejected';
    default: return '';
  }
}
}
