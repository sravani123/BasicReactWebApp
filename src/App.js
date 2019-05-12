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


app.listen(4000, () => {
  console.log("Server running on port 4000");
 });
 

 app.post("/url", (req, res, next) => {
   console.log("============");
   console.log(req.body);
   const name = req.body.name;
   const toEmail = "dhobiboylaundry@gmail.com";
   const message=  req.body.message;
   const fromEmail = req.body.email;
  //  const {name, email, message} = req.body; 
   console.log('message======'+message);
   var mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: `Shedule Request from ${name} `,
    text: `You have got a service request from the name : ${message}`
  };
  var SheduleMailOption = {
    from: 'shedule@dhobiboy.com',
    to: fromEmail,
    subject: `Your request has been confirmed with Dhobi Boy !!! `,
    text: `Your request has been confirmed, Our agent will get back to you soon... \n ${message}`
  }
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dhobiboylaundry@gmail.com',
      pass: 'kingmaker'
    }
  });
  var sheduleMailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shedule@dhobiboy.com',
      pass: 'shedule12335'
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
      console.log("mainl sent successsfully");
      console.log(info);
      sheduleMailTransporter.sendMail(SheduleMailOption, function(error, info){
        if (error) {
          console.log("errro===="+error);
        }else{
          console.log("mainl sent successsfully from shedulue");
      console.log(info);
          console.log("message sent from shedlue also");
        }
      });
      console.log('Email sent: ' + info.response);
    }
  });
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
 });
 