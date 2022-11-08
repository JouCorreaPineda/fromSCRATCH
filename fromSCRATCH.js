const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
  res.send('hello world!');
});

app.listen(port, ()=>{
  console.log('Im listening to absolutely everything you do.. EVERYTHING.. ill be here if you need me...')
})