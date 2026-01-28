export type ApplicationStatus = 'Applied' | 'Rejected' | 'Offer' | 'Interview';

export interface Application{
    id: number;
    company: string;
    position: string;
    applicationDate: Date;
    status: ApplicationStatus;
}