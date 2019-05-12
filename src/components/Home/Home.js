import React, {useEffect} from 'react';
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

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);



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
      selectedService:'',
      selectedDate: new Date(),
      selectedTime : new Date(),
      minSelectedDate :  new Date(),
      minSelectedTime : new Date(),
      error_name:'', 
      error_email:'',
      error_address:'',
      error_mobileNumber:'',
      error_selectedService:'',
      error_selectedDate:'',
      error_selectedTime:''
  },
  
  };
  
  validateForm() {

    let fields = this.state.serviceRequest;
    let formIsValid = true;
  
    if (!fields["name"]) {
      formIsValid = false;
      fields["error_name"] = "*Please enter your username.";
    }
  
    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        fields["error_name"] = "*Please enter alphabet characters only.";
      }
    }
  
    if (!fields["email"]) {
      formIsValid = false;
      fields["error_email"] = "*Please enter your email-ID.";
    }
  
    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        fields["error_email"] = "*Please enter valid email-ID.";
      }
    }
  
    if (!fields["mobileNumber"]) {
      formIsValid = false;
      fields["error_mobileNumber"] = "*Please enter your mobile no.";
    }
  
    if (typeof fields["mobileNumber"] !== "undefined") {
      if (!fields["mobileNumber"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        fields["error_mobileNumber"] = "*Please enter valid mobile no.";
      }
    }
  
    if (!fields["address"]) {
      formIsValid = false;
      fields["error_address"] = "*Please enter your address.";
    }
    console.log("selected service is ==="+fields["selectedService"]);
    if(!fields["selectedService"]){
      formIsValid = false;
      fields["error_selectedService"] = "*Please select a service.";
    }

    if(!fields["selectedDate"]){
      formIsValid = false;
      fields["error_selectedDate"] = "*Please select date.";

    }
    if(!fields["selectedTime"]){
      formIsValid = false;
      fields["error_selectedTime"] = "*Please select time.";

    }
    this.setState({
      serviceRequest: fields
    });

    return formIsValid;
  
  }
   
handleInputFieldChange = (event, name) => {
  // event.preventDefault();
  if(name!=='selectedDate' && name!== 'selectedTime'){
  event.persist();
     const { target } = event;
    this.setState(preState => ({
      ...preState,
      serviceRequest: {
        ...preState.serviceRequest,
        [name]: target.value
      }
    }));
  }else{
    this.setState(preState => ({
      ...preState,
      serviceRequest: {
        ...preState.serviceRequest,
        [name]: event
      }
    }));
  }
  };

  
  handleShow = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  

   handleSubmit = (e) =>{
  //  e.preventDefault();
  //  console.log("Submit is called");
   if(this.validateForm()){
    let {serviceRequest: {name, email, mobileNumber,address,selectedService,selectedDate,selectedTime}} = this.state;
    // selectedTime = selectedTime ? selectedTime.getHours() +':' + selectedTime.getMinutes() : '';
    // selectedDate = selectedDate? `${selectedDate.getDate()} /  ${selectedDate.getMonth()}` :'';
    // e.preventDefault();
    axios({
        method: "POST", 
        url:"http://localhost:4000/url", 
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        data: {
            name: name,   
            email: email,  
            message: ` ${name} \n Selected Service : ${selectedService} \n on Date: ${selectedDate}  \n Time: ${selectedTime} \n  email: ${email} \n  Contact details: ${mobileNumber} \n Address: ${address} ,  \n`
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
   }
   else{
   console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
   }
  };

  render() {
    const {serviceRequest} = this.state;
    const {errors} = this.state;
    
    return (
      <div>
      <HomeTemplate 
        handleShow = {this.handleShow}
        handleClose = {this.handleClose}
        serviceRequest = {serviceRequest}
        errors = {errors}
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