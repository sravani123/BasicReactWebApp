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
// import Option from '@material-ui/core/Option';
import InputLabel from '@material-ui/core/InputLabel';
import Card from 'react-bootstrap/Card';
import myImg from '../../assets/hipsters-cropped-screened.jpg';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import {
    MuiPickersUtilsProvider,
    DatePicker,
    TimePicker
  } from "material-ui-pickers";
  

const CarousalTemplate = (props) =>  (
    

   <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal_img_one}
        alt="First slide"
      />
     <div className="carousel-caption d-none d-md-block">
    <button type="button" className="btn btn-success btn-shedule-service"  onClick={props.handleShow}>Shedule pickup </button>
    </div>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal_img_two}
        alt="Second slide"
      />
  <div className="carousel-caption d-none d-md-block">
    <button type="button" className="btn btn-success btn-shedule-service"  onClick={props.handleShow}>Shedule pickup</button>
    </div>
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal_img_three}
        alt="Third slide"
      />
  <div className="carousel-caption d-none d-md-block">
    <button type="button" className="btn btn-success btn-shedule-service"  onClick={props.handleShow}>Shedule pickup</button>
    </div>
    
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal_img_four}
        alt="Third slide"
      />
  <div className="carousel-caption d-none d-md-block">
    <button type="button" className="btn btn-success btn-shedule-service"  onClick={props.handleShow}>Shedule pickup</button>
    </div>
    </Carousel.Item>
  </Carousel>
  <Dialog
            open={props.open}
            onClose={props.handleClose}
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
                value = {props.values.name}
                onChange={props.handleChange}
                type="text"
                fullWidth
              />
               <TextField
                autoFocus
                margin="dense"
                id="emailId"
                label="Email Address"
                type="email"
                value= {props.values.email}
                onChange={props.handleChange}

                fullWidth
              />
               <TextField
                autoFocus
                margin="dense"
                id="mobile-number"
                label="Mobile number"
                type="number"
                onChange={props.handleChange}

                value ={props.values.mobileNumber}
                fullWidth
              />
         <FormControl required >
          <InputLabel htmlFor="age-required">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            name="age"
            inputProps={{
              id: 'age-required',
            }}
           
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
            <MuiPickersUtilsProvider utils={props.DateFnsUtils}>
            <div className="date-time-pickers">
            
            <DatePicker
            className = "date-picker"
            value={props.selectedDate}
            onChange={props.handleDateChange}
          />
            <TimePicker className = "time-picker" value={props.selectedTime} onChange={props.handleTimeChange} />           
             </div>
          </MuiPickersUtilsProvider>
          <TextField
                autoFocus
                margin="dense"
                id="address-one"
                label="Address Line 1 "
                onChange={props.handleChange}

                type="text"
                fullWidth
              />
                <TextField
                autoFocus
                margin="dense"
                id="address-two"
                label="Address Line 2 "
                onChange={props.handleChange}

                type="text"
                fullWidth
              />
                <TextField
                autoFocus
                margin="dense"
                id="landmark"
                label="Landmark"
                onChange={props.handleChange}

                type="text"
                fullWidth
              />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={props.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={props.handleSubmit} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
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
                     
export default CarousalTemplate;
