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
import {
    MuiPickersUtilsProvider,
    DatePicker,
    TimePicker
  } from "material-ui-pickers";
  

  export default class AddOption extends React.Component {
    handleChange = (e) => {
      e.preventDefault();
      this.props.handleChange(option);
    };

    render() {
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
                onChange={this.handleChange('name')}
                value ={props.name}
                // onChange={e => this.setState({ name: e.target.value })}
                type="text"
                fullWidth
              />
               <TextField
                autoFocus
                margin="dense"
                id="emailId"
                label="Email Address"
                type="email"
                value= {props.email}
                fullWidth
              />
               <TextField
                autoFocus
                margin="dense"
                id="mobile-number"
                label="Mobile number"
                type="number"
                value ={props.mobileNumber}
                fullWidth
              />
              <Select
                native
                          value={props.age}
                          className = "select-service"
                          // onChange={this.handleChange}
                          fullWidth
                          inputProps={{
                            name: 'age',
                            id: 'age-simple',
                          }}
                        >
            
              <option value={10}>Dry Cleaning</option>
              <option value={20}>Saree Rolling</option>
              <option value={30}>Wash & Iron</option>
            </Select>
            <MuiPickersUtilsProvider utils={props.DateFnsUtils}>
            <div className="date-time-pickers">
            
            <DatePicker
            className = "date-picker"
            value={props.selectedDate}
            onChange={props.handleDateChange}
          />
            <TimePicker className = "time-picker" value={props.selectedDate} onChange={props.handleDateChange} />           
             </div>
          </MuiPickersUtilsProvider>
          <TextField
                autoFocus
                margin="dense"
                id="address-one"
                label="Address Line 1 "
                type="text"
                fullWidth
              />
                <TextField
                autoFocus
                margin="dense"
                id="address-two"
                label="Address Line 2 "
                type="text"
                fullWidth
              />
                <TextField
                autoFocus
                margin="dense"
                id="landmark"
                label="Landmark"
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
    }
      )
  }
export default  CarousalTemplate;