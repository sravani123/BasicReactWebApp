import React,  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousal_img_one from '../../assets/web-banners-01.jpg';
import carousal_img_two from '../../assets/web-banners-02.jpg';
import carousal_img_three from '../../assets/web-banners-03.jpg';
import carousal_img_four from '../../assets/web-banners-04.jpg';
import carousal_img_five from '../../assets/web-banners-05.jpg';

import how_it_works_1 from '../../assets/how_it_works_1.png';
import how_it_works_2 from '../../assets/how_it_works_2.png';
import how_it_works_3 from '../../assets/how_it_works_3.png';
import how_it_works_4 from '../../assets/how_it_works_4.png';

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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
      selectedService,
      selectedDate,
      selectedTime,
      minSelectedDate,
      error_name, 
      error_email,
      error_address,
      error_mobileNumber,
      error_selectedService,
      error_selectedDate,
      error_selectedTime
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
  <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} />
          <li data-target="#demo" data-slide-to={2} />
          <li data-target="#demo" data-slide-to={3} />
          <li data-target="#demo" data-slide-to={4} />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img   src={carousal_img_one} alt="Los Angeles"  height="400"/>
            <div className="carousel-caption">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
              {/* <button type="button" className="btn btn-success btn-shedule-service"  onClick={handleShow}>Shedule Pickup</button> */}
              <button className="item button-hand btn-shedule-service custom" onClick={handleShow} >Shedule pickup!</button>

            </div>   
          </div>
          <div className="carousel-item">
            <img   src={carousal_img_two} alt="Chicago"  height="400" />
            <div className="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
              {/* <button type="button" className="btn btn-success btn-shedule-service"  onClick={handleShow}>Shedule Pickup</button> */}
             <button className="item button-hand btn-shedule-service custom" onClick={handleShow} >Shedule pickup!</button>

            </div>   
          </div>
          <div className="carousel-item">
            <img   src={carousal_img_three} alt="New York"  height="400" />
            <div className="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
              {/* <div className="item button-hand btn-shedule-service" ><button class="custom" >Shedule pickup!<div className="hands" /></button></div>
              <button type="button" className="btn btn-success btn-shedule-service"  onClick={handleShow}>Shedule pickup</button> */}
              <button className="item button-hand btn-shedule-service custom" onClick={handleShow} >Shedule pickup!</button>

            </div>   
          </div>
          <div className="carousel-item">
            <img   src={carousal_img_four} alt="New York"  height="400" />
            <div className="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
              {/* <button type="button" className="btn btn-success btn-shedule-service"  onClick={handleShow}>Shedule Pickup</button>
              <div className="item button-hand btn-shedule-service" ><button class="custom" >Shedule pickup!<div className="hands" /></button></div> */}
              <button className="item button-hand btn-shedule-service custom" onClick={handleShow} >Shedule pickup!</button>

            </div>   
          </div>
          <div className="carousel-item">
            <img   src={carousal_img_five} alt="New York"  height="400"  />
            <div className="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
              {/* <button type="button" className="btn btn-success btn-shedule-service"  onClick={handleShow}>Shedule Pickup</button>
              <div className="item button-hand btn-shedule-service" ><button class="custom" >Shedule pickup!<div className="hands" /></button></div> */}
              <button className="item button-hand btn-shedule-service custom" onClick={handleShow} >Shedule pickup!</button>

            </div>   
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
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
              <form   autoComplete="off"  noValidate>

              <TextField
                // autoFocus
                margin="dense"
                id="name"
                label="Name"
                value = {name}
                onChange={event => handleInput(event, "name")}
                type="text"
                fullWidth
                required
              />
              
              <div className="errorMsg">{error_name}</div>
               <TextField
                // autoFocus
                margin="dense"
                id="emailId"
                label="Email Address"
                type="email"
                value= {email}
                onChange={event => handleInput(event, "email")}
                required
                fullWidth
              />
              <div className="errorMsg">{error_email}</div>

               <TextField
                // autoFocus
                margin="dense"
                id="mobile-number"
                label="Mobile number"
                type="number"
                onChange={event => handleInput(event, "mobileNumber")}
                required
                value ={mobileNumber}
                fullWidth
              />
                            <div className="errorMsg">{error_mobileNumber}</div>

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
                               <div className="errorMsg">{error_selectedService}</div>

        </FormControl>
       
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="date-time-pickers">
            
            <DatePicker
            className = "date-picker"
            value={selectedDate}
            fullWidth
            minDate={minSelectedDate}
            onChange={event => handleInput(event, "selectedDate")}
          />
                               <div className="errorMsg">{error_selectedTime}</div>

            <TimePicker  fullWidth className = "time-picker"  value={selectedTime} onChange={event => handleInput(event, "selectedTime")}
 />      
                     <div className="errorMsg">{error_selectedTime}</div>

             </div>
          </MuiPickersUtilsProvider>
          <TextField
          required
                // autoFocus
                margin="dense"
                id="address"
                label="Address"
                value = {address}
                onChange={event => handleInput(event, "address")}
                type="text"
                fullWidth
              />
               <div className="errorMsg">{error_address}</div>

               
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
              <ProgressButton extendClick = {e => handleSubmit(e)} />

             
            </DialogActions>
          </Dialog>
          </MuiThemeProvider>

          <div>        
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
  <div className="container">
   <div className="row ">
    <Card className="col-md-3 col-xs-6">
      <Card.Img variant="top" src={how_it_works_1}  />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
       
      </Card.Body>
      <Card.Footer>
      <Card.Link href="#">Card Link</Card.Link>
      </Card.Footer>
    </Card>
    <Card className="col-md-3 col-xs-6"> 
      <Card.Img variant="top" src={how_it_works_2} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer>
      <Card.Link href="#">Card Link</Card.Link>
      </Card.Footer>
    </Card>
    <Card className="col-md-3 col-xs-6">
      <Card.Img variant="top" src={how_it_works_3}  />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
       
      </Card.Body>
      <Card.Footer>
      <Card.Link href="#">Card Link</Card.Link>
      </Card.Footer>
    </Card>
    <Card className="col-md-3 col-xs-6">
      <Card.Img variant="top" src={how_it_works_4}  />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
       
      </Card.Body>
      <Card.Footer>
      <Card.Link href="#">Card Link</Card.Link>
      </Card.Footer>
    </Card>
  </div>;
  </div>
  </div>
  </div>
  </div>
   
    
  )
}
                     
export default CarousalTemplate;
