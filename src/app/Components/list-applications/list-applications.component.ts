import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationService } from '../../services/application.service';
import { Application } from '../../models/application.model';

@Component({
  selector: 'app-list-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-applications.component.html',
  styleUrls: ['./list-applications.component.css']
})
export class ListApplicationsComponent implements OnInit {
  applications: Application[] = [];

  constructor(private appService: ApplicationService) {}

  ngOnInit(): void {
    this.appService.getApplications().subscribe(data => {
      this.applications = data;
    });
  }
}
