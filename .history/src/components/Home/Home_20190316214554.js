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
  // const [selectedDate, handleDateChange] = useState(new Date());

  state = {
    open: false,
    selectedDate: new Date(),
    selectedTime : new Date().getTime(),
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
    this.setState({ selectedDate: date.getDate() + "/"
    + (date.getMonth()+1)  + "/" 
    + date.getFullYear() });
  };
  handleTimeChange = date => {
    console.log(date);
    this.setState({ selectedTime:  date.getHours() + ":"  
    + date.getMinutes()  });
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
    const {selectedDate,selectedTime, serviceRequest} = this.state;

    const { name, email, mobileNumber, addressOne, addressTwo,landMark } = serviceRequest;
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
            message: `You have got a service request from the name : ${name}, \n on Date: ${selectedDate} ,\n Time: ${selectedTime} email: ${email}, \n  Contact details: ${mobileNumber}, \n Address: ${addressOne} , \n ${addressTwo}, \n ${landMark}`
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
    const {selectedDate,selectedTime, serviceRequest} = this.state;
    const { name, email, mobileNumber } = serviceRequest;
    const values =   { name, email, mobileNumber };

    return (
      <div>
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="pickers">
        <DatePicker value={selectedDate} onChange={this.handleDateChange} />
        <TimePicker value={selectedDate} onChange={this.handleDateChange} />
         />
      </div>
    </MuiPickersUtilsProvider>
      <HomeTemplate 
      handleShow = {this.handleShow}
        handleClose = {this.handleClose}
        handleSubmit = {this.handleSubmit}
        values = {values}
        DateFnsUtils ={DateFnsUtils}
        handleDateChange ={this.handleDateChange}
        handleTimeChange={this.handleTimeChange}
        handleChange = {this.handleChange}
        selectedDate = {selectedDate}
        selectedTime = {selectedTime}
        open = {this.state.open}
       /> 
     </div>
  
    );
  }
}


export default Home;