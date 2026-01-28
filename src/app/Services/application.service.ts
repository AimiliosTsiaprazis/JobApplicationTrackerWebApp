import { Injectable } from "@angular/core";
import { Application } from "../Models/application.model";

@Injectable({
    providedIn: 'root'
})

export class ApplicationService{
    private applications : Application[] = [];
    private currentId = 1;
    
    constructor(){}

    getApplications(): Application[] {
        return this.applications;
    }

    addApplication(app: Omit<Application, 'id'>): void{
        const newApp: Application = { id: this.currentId++, ...app };
        this.applications.push(newApp);
    }
}