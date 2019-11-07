import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Imgage from "react-bootstrap/Image";

const UserItem = props => {
  const { login, avatar_url, html_url } = props.user;

  return (
    <div className="cardContainer">
      <Card>
        <Imgage
          className="mx-auto"
          roundedCircle
          src={avatar_url}
          style={{ width: "7rem", height: "7rem" }}
        />
        <Card.Body className="text-center">
          <Card.Title>{login}</Card.Title>

          <Link to={`user/${login}`} className="btn btn-primary btn-sm">
            More
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserItem;
