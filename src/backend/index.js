const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

var db = mysql.createConnection({
 host:'34.66.177.166',
 user: 'root',
 password:'teamGreen',
 database:'steam_game_data',
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/get', (require, response) => {
    const genre = require.body.genres;
    const platform = require.body.platforms;
    const category = require.body.categories;

    //const genre = JSON.parse(genre1)

    var genreId = 0;
    var platformId = 0;
    var categoryId = 0;
    
    if(genre.nonGame == true) {
        genreId = genreId | 1;
    }
    if(genre.indie == true) {
        genreId = genreId | 2;
    }
    if(genre.action == true) {
        genreId = genreId | 4;
    }
    if(genre.adventure == true) {
        genreId = genreId | 8;
    }
    if(genre.casual == true) {
        genreId = genreId | 16;
    }
    if(genre.strategy == true) {
        genreId = genreId | 32;
    }
    if(genre.rpg == true) {
        genreId = genreId | 64;
    }
    if(genre.simulation == true) {
        genreId = genreId | 128;
    }
    if(genre.earlyAccess == true) {
        genreId = genreId | 256;
    }
    if(genre.freeToPlay == true) {
        genreId = genreId | 512;
    }
    if(genre.sports == true) {
        genreId = genreId | 1024;
    }
    if(genre.racing == true) {
        genreId = genreId | 2048;
    }
    if(genre.massivelyMultiplayer == true) {
       genreId = genreId | 4096;
    }
    
    if(platform.Mac == true){
        platformId=platformId | 1;
    }
    if(platform.Linux == true){
        platformId=platformId | 2;
    }
    if(platform.Windows == true){
        platformId=platformId | 4;
    }
    

    if(category.singlePlayer == true){
        categoryId = categoryId | 1;
    }
    if(category.multiplayer == true){
        categoryId = categoryId | 2;
    }
    if(category.coop == true){
        categoryId = categoryId | 4;
    }
    if(category.mmo == true){
        categoryId = categoryId | 8;
    }
    if(category.inAppPurchases == true){
        categoryId = categoryId | 16;
    }
    if(category.includesSourceSdk == true){
        categoryId = categoryId | 32;
    }
    if(category.includesLevelEditor == true){
        categoryId = categoryId | 64;
    }
    if(category.vrSupport == true){
        categoryId = categoryId | 128;
    }
    // console.log(genreId);
    const sqlSelect = "SELECT * FROM steam_game_data.gameInfo WHERE genreId = " + genreId + " AND platformId = " + platformId + " AND categoryId = " + categoryId;
    // const sqlSelect = "SELECT * FROM steam_game_data.gameInfo WHERE genreId = 4"
    db.query(sqlSelect, (err, result) => {
    response.send(result);
    })
    // console.log(result);
})

app.listen(3002, () => {
 console.log("running on port 3002");
})