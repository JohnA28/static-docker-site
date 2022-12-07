const express = require('express');
const path    = require('path');
const server  = express();
const port    = 3000;


server.use(express.json()); //allows parsing of json data
server.use(express.urlencoded({extended: false})); //allows parsing of form data


//sets up server to listen on wanted port
server.listen(port, function(error){   
    if(error) {
        console.log('something went wrong', error) 
    } else {
        console.log('server is listening on port ' + port)
    }
});


//get request for initial domain page
server.get('/', (req, res) => {
    res.json({message:'Docker is lit!'})
});

