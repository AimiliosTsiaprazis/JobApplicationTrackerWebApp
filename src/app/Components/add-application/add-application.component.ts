import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from '../../Services/application.service';
import { ApplicationStatus } from '../../models/application.model';

@Component({
  selector: 'app-add-application',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent {
  company = '';
  position = '';
  status: ApplicationStatus = 'Applied';
  applicationDate = new Date().toISOString().split('T')[0];

  statuses: ApplicationStatus[] = [
    'Applied',
    'Interview',
    'Offer',
    'Rejected'
  ];

  constructor(
    private appService: ApplicationService,
    private router: Router
  ) {}

  submit() {
    this.appService.addApplication({
      company: this.company,
      position: this.position,
      status: this.status,
      applicationDate: this.applicationDate
    }).subscribe(() => {
      this.router.navigate(['/applications']);
    });
  }
}
