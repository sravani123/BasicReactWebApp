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
    selectedTime : new Date(),
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
      landMark:'',
      selectedService:''
  }

  };
  handleDateChange = date => {
    console.log(date);
    this.setState({ selectedDate:date});
  };
  handleTimeChange = time => {
    console.log(time);
    this.setState({ selectedTime: time });
  };
  
  handleShow = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleSelectChange =({target: {name,value}}) => { 
    console.log(value); 
    this.setState({ 
    serviceRequest: { 
    [name]: value 
    } 
    }); 
    }
  // handleServiceTypeChange = event =>{
  //   console.log(event.target.name);
  //   console.log(event.target.value);

  //   this.setState({ [event.target.name]: event.target.value });
  // }
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
      case 'hello':
      this.setState((state ) => {
        console.log('===============event is ================='+event.target.value);
        state.serviceRequest.selectedService =   event.target.value
        return state
      })
      break;
      default:
        return 'foo';
    }
  };

   handleSubmit = (e) =>{
     console.log('handle submmit is called ===>>');
    let {selectedDate,selectedTime,serviceRequest: {name, email, mobileNumber,addressOne , addressTwo, landMark,selectedService}} = this.state;
    selectedTime = selectedTime ? selectedTime.getHours() +':' + selectedTime.getMinutes() : '';
    selectedDate = selectedDate? `${selectedDate.getDate()} /  ${selectedDate.getMonth()}` :'';

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
            message: `You have got a service request from the name : ${name} \n on Date: ${selectedDate}  \n Time: ${selectedTime} \n  email: ${email} \n  Contact details: ${mobileNumber} \n Address: ${addressOne} , \n ${addressTwo}, \n ${landMark}`
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
    // {name, email, ...rest} = {a: 10, b: 20, c: 30, d: 40}
    const {selectedDate,selectedTime,serviceRequest: {name, email, mobileNumber,addressOne , addressTwo, landMark,selectedService}} = this.state;
    // const {} = this.state; 

    // const { name, email, mobileNumber,addressOne , addressTwo, landMark  } = serviceRequest;
    // const shedulueForm =   { name, email, mobileNumber,addressOne , addressTwo, landMark };
    return (
      <div>
      
      <HomeTemplate 
        handleShow = {this.handleShow}
        handleClose = {this.handleClose}
        handleSubmit = {this.handleSubmit}
        name ={name}
        email={email}
        addressOne={addressOne} 
        addressTwo={addressTwo}
         mobileNumber={mobileNumber}
         landMark ={landMark}
         selectedService ={selectedService}
        DateFnsUtils ={DateFnsUtils}
        handleDateChange ={this.handleDateChange}
        handleTimeChange={this.handleTimeChange}
        handleSelectChange ={this.handleSelectChange}
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