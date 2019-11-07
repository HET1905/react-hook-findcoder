import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

// import Button from "react-bootstrap/Button";

const Search = ({ showClear, clearUsers, searchUsers, setAlerts }) => {
  const [text, setText] = useState("");

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlerts("Please enter the words to search..", "light");
    } else {
      // passing the props to upper level
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Control
          type="text"
          name="text"
          value={text}
          onChange={onChange}
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
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlerts: PropTypes.func.isRequired
};
export default Search;
