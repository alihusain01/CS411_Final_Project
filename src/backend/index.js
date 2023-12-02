const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// let pool;

// const createTcpPool = async () => {
//   const dbConfig = {
//     host: '34.66.177.166',
//     port: '3306',
//     user: 'root',
//     password: 'teamGreen',
//   };

//   return mysql.createPool(dbConfig);
// };

// const initializePool = async () => {
//   try {
//     pool = await createTcpPool();
//     console.log("Connected to Cloud SQL");
//   } catch (err) {
//     console.error(err);
//   }
// };

// initializePool();

var connection = mysql.createConnection({
  host: "34.66.177.166",
  port: "3306",
  user: "root",
  password: "teamGreen",
  database: "steam_game_data"
});

connection.connect();

connection.query('SELECT * FROM gameInfo limit 100;', function(err, rows, fields) {
  if(err) console.log(err);
  console.log('The solution is: ', rows);
  connection.end();
});


app.get("/api/searchGames", async (req, res) => {
  try {
    var genreId = 4;
    var platformId = 2;
    var categoryId = 6;

    const sqlSelect =
      "SELECT * FROM steam_game_data.gameInfo WHERE genreId = " +
      genreId +
      " AND platformId = " +
      platformId +
      " AND categoryId = " +
      categoryId;

    // const rows = await pool.query(sqlSelect);
    // res.json(rows);
  } catch (error) {
    console.error("Error handling the GET request:", error);
    res.status(500).send("Server Error: " + error);
  }
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
