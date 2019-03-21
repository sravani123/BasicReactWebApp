const express = require ('express');
const bodyParser = require ('body-parser');
const nodemailer = require ('nodemailer');
const app = express();
var router = express.Router();
// const creds = require('CONFIG');
app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended:false}));
app.post('/api/form',( req, res) =>{
console.log('form is called ====');
});

// const PORT = process.env;
// app.set('port', 5001);

// var server = app.listen(app.get('port'), function () {
//   var port = server.address().port;
//   console.log('Application started on port ' + port);
// });
// app.get('/users', [

// ]);
app.listen(3000, () => {
  console.log("Server running on port 3000");
 });
 app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
 });
// var transport = {
//   host: 'smtp.gmail.com',
//   auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   }
// }

// var transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

// app.post('/send', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var message = req.body.message
//   var content = `name: ${name} \n email: ${email} \n message: ${content} `

//   var mail = {
//     from: name,
//     to: 'chsravani0208@gmail.com',  //Change to email address that you want to receive messages on
//     subject: 'New Message from Contact Form',
//     text: content
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         msg: 'fail'
//       })
//     } else {
//       res.json({
//         msg: 'success'
//       })
//     }
//   })
// })

// module.exports = router;