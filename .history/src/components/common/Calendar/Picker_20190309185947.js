import React, { PureComponent } from "react";
import { TextField } from "material-ui";
export default class App extends PureComponent {
  state = {
    value: ""
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          format="DD/MM/YYYY"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => {
            this.setState({ value: event.target.value });
          }}
        />
        {value}
      </div>
    );
  }
}
