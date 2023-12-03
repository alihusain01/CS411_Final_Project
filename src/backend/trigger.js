// const mysql = require("mysql");

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

// pool.query(
//     //"CREATE TRIGGER InsertUser AFTER INSERT ON UserInfo FOR EACH ROW BEGIN Declare price INT; Declare metacritic INT; Declare recCount INT; Declare steamSpy INT;"
//     "Select * from UserInfo LIMIT 10",(error,results) =>{
//       if(error){
//         console.log('error: '+ error);
//         return;
//       }
//       res.send('Successful');
//     });