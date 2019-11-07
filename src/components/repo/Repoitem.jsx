import React from "react";

const Repoitem = ({ repo }) => {
  return (
    // <div className="card" style={{ width: "600px", height: "50px" }}>
    <h2>
      <a href={repo.html_url}>{repo.name} </a>
    </h2>
    // </div>
  );
};
export default Repoitem;
