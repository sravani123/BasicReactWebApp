import React from 'react';
import JSXTemplate from './Template';
class Home extends React.Component {

  state = {
    open: false,
    age: '',
    name: 'hai',
    date: null,
    time: null,
  };

  handleShow = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {

    return (
      <div>
      <JSXTemplate   />
    </div>
    );
  }
}

export default Home;