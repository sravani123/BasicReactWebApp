const express = require ('express');

const cors = require('cors');
// const twilioAccontId = 'ACe04fe512a5af07037abcc469a7931086';
// const twilioAuthToken ='1af34cd2fafbdd2aeaecf0eaf491ed3f';
const bodyParser = require ('body-parser');
const nodemailer = require ('nodemailer');
const app = express();
var router = express.Router();
// const client = require ('twilio')(twilioAccontId,twilioAuthToken);
// const creds = require('CONFIG');
app.use(cors());

app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended:false}));
app.post('/api/form',( req, res) =>{
console.log('form is called ====');
console.log(req.data);
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
 });
 

 app.post("/url", (req, res, next) => {
   console.log("============");
   console.log(req.body);
   const name = req.body.name;
   const email =  req.body.email;
   const message=  req.body.message;
  //  const {name, email, message} = req.body; 
   console.log('message======'+message);
   var mailOptions = {
    from: 'scheripa@tibco.com',
    to: email,
    subject: `Shedulue Request from ${name} `,
    text: message
  };
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'scheripa@tibco.com',
      pass: 'Techv1@3'
    }
  });
  // client.messages.create({
  //   to:'+919052721247',
  //   from: '(469) 208-5815',
  //   body:'This is Sravani, Sending from Node js'
  // }).then((message)=> console.log('message sent'));
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log("errro===="+error);
    } else {

      console.log('Email sent: ' + info.response);
    }
  });
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
 });
 