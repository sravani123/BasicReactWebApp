const express = require ('express');
const bodyParser = require ('body-parser');
const nodeMailer = require ('nodemailer');
const app = (express);

app.use (bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.post('/api/sendEmail',(req,res)=>{
  console.log(req.body);
});
const PORT = process.env.PORT || 3001;

app.listen (PORT, ()=>{
  console.log('server Listening on =====>>'+PORT);
})