import React,  { useState } from 'react';
import DateFnsUtils from "@date-io/date-fns";
import PropTypes from 'prop-types';
import axios from 'axios';
import HomeTemplate from './HomeTemplate';
import "react-datepicker/dist/react-datepicker.css";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker
} from "material-ui-pickers";


class Home extends React.Component {

  state = {
    open: false,
      mailDetails :{
      name:"",
      email:'',
      message:''
    },
    serviceRequest: {
      name: '',
      email: '',
      mobileNumber:'',
      address:'',
      landMark:'',
      sravani:'',
      selectedService:'',
      selectedDate: new Date(),
      selectedTime : new Date(),
  }

  };
  handleInputFieldChange = (event, name) => {
    event.persist();
    const { target } = event;
    this.setState(preState => ({
      ...preState,
      serviceRequest: {
        ...preState.serviceRequest,
        [name]: target.value
      }
    }));
  };

  
  handleShow = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  

   handleSubmit = (e) =>{
   

    let {serviceRequest: {name, email, mobileNumber,address,landMark,selectedService,selectedDate,selectedTime,sravani}} = this.state;
    selectedTime = selectedTime ? selectedTime.getHours() +':' + selectedTime.getMinutes() : '';
    selectedDate = selectedDate? `${selectedDate.getDate()} /  ${selectedDate.getMonth()}` :'';
    
    // e.preventDefault();
    axios({
        method: "POST", 
        url:"http://ec2-54-197-36-134.compute-1.amazonaws.com:4000/url", 
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        data: {
            name: name,   
            email: email,  
            message: `You have got a service request from the name : ${name} \n Selected Service : ${selectedService} \n on Date: ${selectedDate}  \n Time: ${selectedTime} \n  email: ${email} \n  Contact details: ${mobileNumber} \n Address: ${address} ,  \n`
        }
    }).then((response)=>{
      console.log("============"+name);
      console.log(response);
      
       this.handleClose();
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
  };


  render() {
    const {serviceRequest} = this.state;
    
    return (
      <div>
      
      <HomeTemplate 
        handleShow = {this.handleShow}
        handleClose = {this.handleClose}
        serviceRequest = {serviceRequest}
        DateFnsUtils ={DateFnsUtils}
        handleSubmit ={this.handleSubmit}
        handleInput ={this.handleInputFieldChange}
        open = {this.state.open}
       /> 
     </div>
  
    );
  }
}


export default Home;