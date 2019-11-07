import React from "react";
import PropTypes from "prop-types";

import Repoitem from "./Repoitem";
const Repolist = ({ repos }) => {
  return (
    <div className="card mt-2 p-4" style={{ width: "600px", height: "auto" }}>
      <h2>List of Current Repos</h2>
      {repos.map(repo => (
        <Repoitem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};
Repolist.propTypes = {
  repos: PropTypes.object.isRequired
};
export default Repolist;
