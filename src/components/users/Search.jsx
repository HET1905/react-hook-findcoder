import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

// import Button from "react-bootstrap/Button";

class Search extends Component {
  state = {
    text: ""
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlerts: PropTypes.func.isRequired
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlerts("Please enter the words to search..", "light");
    } else {
      // passing the props to upper level
      this.props.searchUsers(this.state.text);
      this.setState({
        text: ""
      });
    }
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Control
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="Search coders......."
          />
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}

          <input type="submit" value="Search" className="btn btn-primary" />

          {showClear && (
            <input
              type="button"
              className="btn btn-light"
              value="Clear"
              onClick={clearUsers}
            />
          )}
        </Form>
      </div>
    );
  }
}

export default Search;
