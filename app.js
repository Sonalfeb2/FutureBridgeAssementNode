const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors');
const moviesData = require('./component/MoviesData');
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(moviesData.Movies)
})
app.post('/search',(req,res)=>{
    const input = req.body.value;
    const findData = moviesData.Movies.filter((data)=>data.name===input);
    res.send(findData)
})

app.listen(8080);