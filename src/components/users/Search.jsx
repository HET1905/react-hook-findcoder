import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = ({ setAlerts }) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter the words to search..", "light");
    } else {
      // passing the props to upper level
      githubContext.searchUsers(text);
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

        <input type="submit" value="Search" className="btn btn-primary" />

        {githubContext.users.length > 0 && (
          <input
            type="button"
            className="btn btn-light"
            value="Clear"
            onClick={githubContext.clearUsers}
          />
        )}
      </Form>
    </div>
  );
};
Search.propTypes = {
  setAlerts: PropTypes.func.isRequired
};
export default Search;
