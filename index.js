const path = require('path'); 
const express = require('express');

app = express();

// Landing page
app.get('/', (req, res)=>{

    res.sendFile(path.join(__dirname, 'public/templates/index.html'));


});
