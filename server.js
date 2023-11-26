const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();           
const port = 5000;                

app.use(bodyParser.json());

/* Include all created routes */
const RoutesCustom = require('./api');
new RoutesCustom(app);
app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});