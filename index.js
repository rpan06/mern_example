const express = require('express');
const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req,res)=>{
    res.send('<h1>This is my serverrrrrr</h1>');
});

app.listen(PORT, () => {
    console.log('This is your captain speaking, we are listening on Port: ' + PORT)
});
