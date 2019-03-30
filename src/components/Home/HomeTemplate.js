import React,  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousal_img_one from '../../assets/web-banners-01.jpg';
import carousal_img_two from '../../assets/web-banners-02.jpg';
import carousal_img_three from '../../assets/web-banners-03.jpg';
import carousal_img_four from '../../assets/web-banners-03.jpg';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Select from '@material-ui/core/Select';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImg from '../../assets/hipsters-cropped-screened.jpg';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import ProgressButton from './../Common/ProgressButton'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {
    MuiPickersUtilsProvider,
    DatePicker,
    TimePicker
  } from "material-ui-pickers";
  
  const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });
const CarousalTemplate = (props) =>  {
  const {
    serviceRequest: {
      name,
      email,
      mobileNumber,
      address,
      landMark,
      selectedService,
      selectedDate,
      selectedTime,
  },
  handleShow,
  handleClose,
  handleSubmit,
  DateFnsUtils,
   handleInput,
   open 
  } = props;
  return (
   <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal_img_one}
        alt="First slide"
      />
     <div className="carousel-caption d-none d-md-block">
    <button type="button" className="btn btn-success btn-shedule-service"  onClick={handleShow}>Shedule pickup </button>
    </div>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal_img_two}
        alt="Second slide"
      />
  <div className="carousel-caption d-none d-md-block">
    <button type="button" className="btn btn-success btn-shedule-service"  onClick={handleShow}>Shedule pickup</button>
    </div>
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal_img_three}
        alt="Third slide"
      />
  <div className="carousel-caption d-none d-md-block">
    <button type="button" className="btn btn-success btn-shedule-service"  onClick={handleShow}>Shedule pickup</button>
    </div>
    
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal_img_four}
        alt="Third slide"
      />
  <div className="carousel-caption d-none d-md-block">
    <button type="button" className="btn btn-success btn-shedule-service"  onClick={handleShow}>Shedule pickup</button>
    </div>
    </Carousel.Item>
  </Carousel>
  <MuiThemeProvider muiTheme={getMuiTheme()}>

  <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Submit a pickup request</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send
                updates occasionally.
              </DialogContentText>
              <form  noValidate autoComplete="off">

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                value = {name}
                onChange={event => handleInput(event, "name")}
                type="text"
                fullWidth
              />
               <TextField
                autoFocus
                margin="dense"
                id="emailId"
                label="Email Address"
                type="email"
                value= {email}
                onChange={event => handleInput(event, "email")}

                fullWidth
              />
               <TextField
                autoFocus
                margin="dense"
                id="mobile-number"
                label="Mobile number"
                type="number"
                onChange={event => handleInput(event, "mobileNumber")}

                value ={mobileNumber}
                fullWidth
              />
           <FormControl required fullWidth className="formControl">
           <InputLabel htmlFor="service-required">Selected Service</InputLabel>
          <Select
            value={selectedService || ''}
            onChange={event => handleInput(event, "selectedService")}
            displayEmpty
            inputProps={{
              name: 'selectedService',
             
            }}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            <MenuItem value="Dry Cleaning">Dry Cleaning</MenuItem>
            <MenuItem value="Washing and Ironing">Washing and Ironing</MenuItem>
            <MenuItem value="Rolling">Rolling</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
       
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="date-time-pickers">
            
            <DatePicker
            className = "date-picker"
            value={selectedDate}
            onChange={event => handleInput(event, "selectedDate")}
          />
            <TimePicker className = "time-picker" value={selectedTime} onChange={event => handleInput(event, "selectedTime")}
 />           
             </div>
          </MuiPickersUtilsProvider>
          <TextField
                autoFocus
                margin="dense"
                id="address"
                label="Address"
                value = {address}
                onChange={event => handleInput(event, "address")}
                type="text"
                fullWidth
              />
               
                {/* <TextField
                autoFocus
                margin="dense"
                id="landmark"
                label="Landmark"
                onChange={event => handleInput(event, "landmark")}
                value ={landMark}
                type="text"
                fullWidth
              /> */}
              </form>
            </DialogContent>
            <DialogActions>
           
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <ProgressButton extendClick = {handleSubmit} />
              {/* <Button onClick={props.handleSubmit} color="primary">
                Submit
              </Button> */}
            </DialogActions>
          </Dialog>
          </MuiThemeProvider>

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
   
    
  )
}
                     
export default CarousalTemplate;
