require("dotenv").config();
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();           
const port = 5000;                

app.use(bodyParser.json());


/* Global DB connection */
// global.DBConnection = require("./db.config");

// const test = async () => {
//   const data = await DBConnection.query('select * from users')
//   console.log(data.rows,'data')
// }
// test()

/* Include all created routes */
const RoutesCustom = require('./api');
new RoutesCustom(app);
app.listen(port, () => {
    console.log(`Now listening on port ${process.env.PORT}`); 
});