const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'JobApplicationTrackerAngular'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.get('/applications', (req, res) => {
  db.query('SELECT * FROM applications', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.post('/applications', (req, res) => {
  const { company, position, status, applicationDate } = req.body;
  db.query(
    'INSERT INTO applications (company, position, status, applicationDate) VALUES (?, ?, ?, ?)',
    [company, position, status, applicationDate],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ id: result.insertId, company, position, status, applicationDate });
    }
  );
});

app.listen(3000, () => console.log('Backend running on http://localhost:3000'));
