import React,  { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Hello from '../Common/Calendar/Hello';
import DateFnsUtils from "@date-io/date-fns";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import CarousalTemplate from './CarousalTemplate';
import myImg from '../../assets/hipsters-cropped-screened.jpg';
import Button from 'react-bootstrap/Button';


// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const styles = {
  grid: {
    width: '60%',
  },
};

class Home extends React.Component {

  state = {
    open: false,
   
    selectedDate: new Date(),
    mailDetails :{
      name:"",
      email:'',
      message:''
    },
    serviceRequest: {
      name: '',
      email: '',
      mobileNumber:'',
      address:''
  },


  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  handleShow = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = (event) =>{
      console.log(event.target);
     
    };
   handleSubmit = (e) =>{
    const { name, email, mobileNumber, address } = this.state.serviceRequest;
    e.preventDefault();
    const message ='';
    axios({
        method: "GET", 
        url:"http://localhost:3000/url", 
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        data: {
            name: name,   
            email: email,  
            messsage: message
        }
    }).then((response)=>{
      console.log("============");
      console.log(response);
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
  };


  render() {
    const { selectedDate } = this.state;
    const { name, email, mobileNumber } = this.state.serviceRequest;

    return (
      <div>
      <CarousalTemplate 
      handleShow = {this.handleShow}
      handleClose = {this.handleClose}
      name = {name}
      email ={email}
      mobileNumber = {mobileNumber}
      DateFnsUtils ={DateFnsUtils}
      />
              

        
   <div>        
  <div className="spacer-small"> </div>
  <div className= "col-md-12 col-sm-12 heading-div">
  <h2 className="text-center">Services</h2>
  <hr className="col-sm-6 col-md-6"/>
  
  </div>
  
  <div className="container">
   <div className="row ">
    <Card className="col-md-4 col-xs-6">
      <Card.Img variant="top" src={myImg}  />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      
    </Card>
    <Card className="col-md-4 col-xs-6"> 
      <Card.Img variant="top" src={myImg} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      
    </Card>
    <Card className="col-md-4 col-xs-6">
      <Card.Img variant="top" src={myImg}  />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
     
    </Card>
  </div>;
  </div>
  <div className="spacer-small"> </div>
  <div className= "col-md-12 col-sm-12 heading-div">
  <h2 className="text-center">How it works</h2>
  <hr className="col-sm-6 col-md-6"/>
  
  </div>
  </div>
  </div>
    );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Home);