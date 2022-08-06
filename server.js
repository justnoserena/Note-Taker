const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const homeRoutes = require('./routes/homeRoutes')
const {json, urlencoded} = require('express')

const PORT = 3001;
const app = express();

app.use(json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', homeRoutes);

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
