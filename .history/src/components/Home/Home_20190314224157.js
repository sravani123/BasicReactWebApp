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
      handleDateChange ={this.handleDateChange}
      open={this.state.open}
      />
     </div>
  
    );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Home);