const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let pool;

const createTcpPool = async () => {
  const dbConfig = {
    host: '34.66.177.166',
    port: '3306',
    user: 'root',
    password: 'teamGreen',
  };

  return mysql.createPool(dbConfig);
};

const initializePool = async () => {
  try {
    pool = await createTcpPool();
    console.log("Connected to Cloud SQL");
  } catch (err) {
    console.error(err);
  }
};

initializePool();

app.get("/api/searchGames", async (req, res) => {
  try {

    const { genres, platforms, categories } = req.query;

    // Convert the query parameters to objects
    const genre = JSON.parse(genres || '{}');
    const platform = JSON.parse(platforms || '{}');
    const category = JSON.parse(categories || '{}');

    // Now you can use these objects in your query
    console.log(genre);
    console.log(platform);
    console.log(category);

    var genreId = 0;
    var platformId = 0;
    var categoryId = 0;

    if(genre.nonGame === true) {
        genreId = genreId | 1;
    }
    if(genre.indie === true) {
        genreId = genreId | 2;
    }
    if(genre.action === true) {
        genreId = genreId | 4;
    }
    if(genre.adventure === true) {
        genreId = genreId | 8;
    }
    if(genre.casual === true) {
        genreId = genreId | 16;
    }
    if(genre.strategy === true) {
        genreId = genreId | 32;
    }
    if(genre.rpg === true) {
        genreId = genreId | 64;
    }
    if(genre.simulation === true) {
        genreId = genreId | 128;
    }
    if(genre.earlyAccess === true) {
        genreId = genreId | 256;
    }
    if(genre.freeToPlay === true) {
        genreId = genreId | 512;
    }
    if(genre.sports === true) {
        genreId = genreId | 1024;
    }
    if(genre.racing === true) {
        genreId = genreId | 2048;
    }
    if(genre.massivelyMultiplayer === true) {
       genreId = genreId | 4096;
    }

    if(platform.Mac === true){
        platformId=platformId | 1;
    }
    if(platform.Linux === true){
        platformId=platformId | 2;
    }
    if(platform.Windows === true){
        platformId=platformId | 4;
    }


    if(category.singlePlayer === true){
        categoryId = categoryId | 1;
    }
    if(category.multiplayer === true){
        categoryId = categoryId | 2;
    }
    if(category.coop === true){
        categoryId = categoryId | 4;
    }
    if(category.mmo === true){
        categoryId = categoryId | 8;
    }
    if(category.inAppPurchases === true){
        categoryId = categoryId | 16;
    }
    if(category.includesSourceSdk === true){
        categoryId = categoryId | 32;
    }
    if(category.includesLevelEditor === true){
        categoryId = categoryId | 64;
    }
    if(category.vrSupport === true){
        categoryId = categoryId | 128;
    }

    const sqlSelect = "SELECT * FROM steam_game_data.gameInfo WHERE genreId = " + genreId + " AND platformId = " + platformId + " AND categoryId = " + categoryId;

    pool.query(sqlSelect, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });

  } catch (error) {
    console.error("Error handling the GET request:", error);
    res.status(500).send("Server Error: " + error);
  }
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
