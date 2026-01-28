DROP DATABASE IF EXISTS JobApplicationTrackerAngular;
CREATE DATABASE JobApplicationTrackerAngular;
USE JobApplicationTrackerAngular;

CREATE TABLE applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  company VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  applicationDate DATE,
  status VARCHAR(255)
);