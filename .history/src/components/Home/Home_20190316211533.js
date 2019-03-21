import React,  { useState } from 'react';
import DateFnsUtils from "@date-io/date-fns";
import PropTypes from 'prop-types';
import axios from 'axios';
import HomeTemplate from './HomeTemplate';
import "react-datepicker/dist/react-datepicker.css";


class Home extends React.Component {
  // const [selectedDate, handleDateChange] = useState(new Date());

  state = {
    open: false,
    selectedDate:new Date(),
    mailDetails :{
      name:"",
      email:'',
      message:''
    },
    serviceRequest: {
      name: '',
      email: '',
      mobileNumber:'',
      addressOne:'',
      addressTwo:'',
      landMark:''
  },

  };
  handleDateChange = date => {
    console.log(date);
    this.setState({ selectedDate: date });
  };

  handleShow = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = event => {
    event.persist();
    console.log(event.target.value);
    switch(event.target.id) {
      case 'mobile-number':
      this.setState(state => {
        state.serviceRequest.mobileNumber = event.target.value
        return state
      })
      break;
      case 'name':
      this.setState(state => {
        state.serviceRequest.name = event.target.value
        return state
      })
      break;
      // this.setState(state => (state.serviceRequest.mobileNumber = '384239847', state));
      case 'emailId':
      this.setState(state => {
        state.serviceRequest.email = event.target.value
        return state
      })
      break;
      case 'address-one':
      console.log()
      this.setState((state )=> {
        state.serviceRequest.addressOne = event.target.value
        return state
      })
      break;
      case 'address-two':
      this.setState((state ) => {
        state.serviceRequest.addressTwo =   `\n` +event.target.value
        return state
      })
      break;
      case 'landmark':
      this.setState((state ) => {
        console.log('===============event is ================='+event.target.value);
        state.serviceRequest.landMark =  `\n` +event.target.value
        return state
      })
      break;
      default:
        return 'foo';
    }
  };

   handleSubmit = (e) =>{
    const { name, email, mobileNumber, addressOne, addressTwo,landMark } = this.state.serviceRequest;
    console.log("name============="+name);
    console.log("mobileNumber============="+mobileNumber);

    e.preventDefault();
    axios({
        method: "POST", 
        url:"http://localhost:3000/url", 
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        data: {
            name: name,   
            email: email,  
            message: `You have got a service request from the name : ${name}, \n email: ${email}, \n  Contact details: ${mobileNumber}, \n Address: ${addressOne} , \n ${addressTwo}, \n ${landMark}`
        }
    }).then((response)=>{
      console.log("============"+name);
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


export default Home;