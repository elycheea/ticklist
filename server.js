const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/build`));

let port = process.env.port || 3001;
app.listen(port, () => console.log(`Now listening on ${port}`));