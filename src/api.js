//Required Packages
const express = require('express');
const serverless = require('serverless-http');
const data = require('../data.json');



const app = express();

const router = express.Router();

router.get('/', (res, req) => {
    res.json(data);
});


app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);