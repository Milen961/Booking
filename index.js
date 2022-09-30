const express = require('express');
const databaseConfig= require('./config/database');
const expressConfing = require('./config/express')
const routesConfing = require('./config/routes')


async function start(){
const app = express();

await databaseConfig(app);
expressConfing(app);
routesConfing(app);

app.listen(3000 ,() => console.log('Server listening on port 3000'))

}

start()




