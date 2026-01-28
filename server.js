const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3306;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'JobApplicationTrackerAngular'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/applications', (req, res) => {
  db.query(
    'SELECT * FROM applications ORDER BY application_date DESC',
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    }
  );
});

app.post('/applications', (req, res) => {
  const { company, position, status, applicationDate } = req.body;

  const sql = `
    INSERT INTO applications (company, position, status, application_date)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [company, position, status, applicationDate],
    (err, result) => {
      if (err) return res.status(500).send(err);

      res.json({
        id: result.insertId,
        company,
        position,
        status,
        applicationDate
      });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
