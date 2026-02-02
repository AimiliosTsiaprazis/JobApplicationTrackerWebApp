# Job Application Tracker

## Description
The **Job Application Tracker** is a web application created to manage and track job applications during a period of unemployment.

The goal of this project was to **stay technically active**, improve full-stack development skills, and organize job applications efficiently by storing relevant data such as application dates, companies, positions, and current statuses.

---

## Features
- Create and manage job applications
- Store application data in a **MySQL database**
- Track:
  - Application date
  - Company name
  - Job position
  - Application status
- Simple and clear user interface
- Separation of frontend and backend logic

---

## Tech Stack

### Frontend
- **Angular**
- **HTML**
- **CSS**
- **TypeScript**

### Backend
- **Node.js**
- **JavaScript**
- **Express**
- **MySQL (localhost)**

---

## Database
- MySQL running locally
- Application data is stored using **in-code SQL queries**
- Connection handled in 'server.js'

---

## Installation & Setup

### 1️: Database Setup
- Create a MySQL database locally
- Configure database credentials in 'server.js'

Example:
host: 'localhost',
user: 'root',
password: 'your_password',
database: 'jobapplicationtrackerangular'

### 2: Backend Setup

Install dependencies and start the backend server:
-npm install
-cd backend
-node server.js

The backend (server.js) must be started first.
live the cmd for the server.js opened

### 3: Frontend Setup

open a new terminal in your project path
Navigate to the Angular project folder and run:
ng serve

### 4: If errors appear
make sure all the folders are lowercase at your system: For Example for 'Models' folder should be 'models'
