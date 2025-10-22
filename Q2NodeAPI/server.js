const express = require('express');
const bodyParse = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParse.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '551524',
    database: 'huongpham_nodejs',
    ssl: false,
});


db.connect((err) =>{
    if(err){
        console.error('Erro connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});


app.post('/huongpham/users', (req, res) => {
    const {name, email} = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?,?)';

    db.query(sql, [name, email], (err, results) =>{
        if(err){
            res.status(500).json({message: 'Error creating user', error: err});
        }else{
            res.json(results)
        }
    }); 
});

app.get('/huongpham/users', (req, res) => {
    const sql = 'SELECT * FROM users';

    db.query(sql, (err, results) =>{
        if(err){
            res.status(500).json({message: 'Error fetching user', error: err});
        }else{
            res.json(results)
        }
    }); 
});

app.get('/huongpham/users/:id', (req, res) =>{
    const userId = req.params.id;
    const sql = 'SELECT * FROM users WHERE id = ?';

    db.query(sql, [userId], (err, results) =>{
        if(err){
            res.status(500).json({message: 'Error fetching user', error: err});
        }else if(results.length === 0){
            res.status(404).json({message: 'User not found'});
        }else{
            res.json(results[0]);
        }
    });
});

app.put('/huongpham/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    const sql = 'UPDATE users SET  name = ?, email = ? WHERE id = ?';

    db.query(sql,  [name, email, userId], (err, result) =>{
        if(err){
            res.status(500).json({message: 'Error updating user', error: err});
        }else if(result.affectedRows === 0){
            res.status(404).json({ message: 'User not found'});
        }else{
            res.json({message: 'User Updated'});
        }
    });
});

app.delete('/huongpham/users/:id', (req, res) =>{
    const userId = req.params.id;
    const sql = 'DELETE FROM users WHERE id = ?';

    db.query(sql, [userId], (err, result) =>{
        if(err){
            res.status(500).json({message: 'Error deleting user', error: err});
        }else if(result.affectedRows === 0){
            res.status(404).json({ message: 'User not found'});
        }else{
            res.json({message: 'User deleted'});
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});