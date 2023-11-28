const express = require('express');
const app = express();
const mysql = require("mysql");

var db = mysql.createConnection({
 host:'34.66.177.166',
 user: 'root',
 password:'teamGreen',
 database:'steam_game_data',
})

app.get('/', (require, response) => {
 const sqlInsert = "DELETE FROM steam_game_data.userInfo WHERE userName = '654'";
 db.query(sqlInsert, (err, result) => {
 response.send("Hello world!!!");
})
})

app.listen(3002, () => {
 console.log("running on port 3002");
})