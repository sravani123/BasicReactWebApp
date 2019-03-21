import React,  { useState } from 'react';
import DateFnsUtils from "@date-io/date-fns";
import PropTypes from 'prop-types';
import axios from 'axios';
import HomeTemplate from './HomeTemplate';
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
  handleChange = name => event => {
    // const { name, email, mobileNumber, address } = this.state.serviceRequest;
const mobileNumber = serviceRequest.mobileNumber;
    console.log('Handle change is called===>>');
    console.log(event.target);
    switch(event.target.id) {
      case 'mobile-number':
      debugger;
        this.setState(()=>({mobileNumber: "8987987"}));
      case 'emailId':
      case 'name':

      default:
        return 'foo';
    }
    this.setState({ [name]: event.target.value });
  };

   handleSubmit = (e) =>{
    const { name, email, mobileNumber, address } = this.state.serviceRequest;
    console.log("name============="+name);
    console.log("mobileNumber============="+mobileNumber);

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
    const { name, email, mobileNumber } = this.state.serviceRequest;
    const values =   { name, email, mobileNumber };
    return (
      <div>
      <HomeTemplate 
     handleShow = {this.handleShow}
      handleClose = {this.handleClose}
      handleSubmit = {this.handleSubmit}
      values = {values}
      DateFnsUtils ={DateFnsUtils}
      handleDateChange ={this.handleDateChange}
       handleChange = {this.handleChange}
       open = {this.state.open}
       /> 
     </div>
  
    );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Home;