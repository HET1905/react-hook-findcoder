import React, { useContext } from "react";
// import PropTypes from "prop-types";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;
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

const userSytyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(150px, 1fr)",
  // gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
