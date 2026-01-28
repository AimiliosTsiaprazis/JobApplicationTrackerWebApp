import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from '../../services/application.service';
import { Application, ApplicationStatus } from '../../models/application.model';

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

  saveApplication() {
    const newApp: Application = {
      id: 0,
      company: this.company,
      position: this.position,
      status: this.status,
      applicationDate: this.applicationDate
    };

    this.appService.addApplication(newApp).subscribe({
      next: (res) => {
        console.log('Application saved', res);
        this.router.navigate(['/list']);
      },
      error: (err) => {
        console.error('Error saving application', err);
      }
    });
  }
}