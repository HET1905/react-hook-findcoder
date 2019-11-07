import React from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userSytyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
        {/* <Spinner /> */}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userSytyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(150px, 1fr)",
  // gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
