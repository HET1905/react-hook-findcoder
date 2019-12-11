import React, { useEffect, useContext } from "react";
// import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";
import Repolist from "../repo/Repolist";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, getUser, loading, getUserRepo, repos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepo(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    blog,
    bio,
    followers,
    following,
    public_gists,
    public_repos,
    location,
    hireable,
    html_url
  } = user;

  if (loading) return <Spinner />;

  return (
    <div className="row">
      <div className="col-12 col-md-8">
        <div
          className="card cardUser mt-2 px-2 text-center"
          style={{ width: "700px", height: "auto" }}
        >
          <h1 className="card-title">{name}</h1>
          <h4>{location}</h4>
          <h5>
            Hireable :{" "}
            {hireable ? (
              <i className="fa fa-check"></i>
            ) : (
              <i className="fa fa-times-circle"></i>
            )}
          </h5>

          <img
            src={avatar_url}
            alt="avtar"
            className="card-img-top rounded-circle mx-auto"
            style={{ width: "150px" }}
          />
          <div className="card-body">
            <p>
              Website : <a href={blog}>{blog}</a>
            </p>
            <p>Bio : {bio}</p>

            <a href={html_url} className="btn btn-primary">
              Visit GitHub Profile
            </a>
          </div>
        </div>
        <div
          className="card infoCard"
          style={{ width: "700px", height: "auto" }}
        >
          <span className="badge badge-primary">Followers : {followers}</span>
          <span className="badge badge-secondary">Following : {following}</span>
          <span className="badge badge-success">
            Public Repos : {public_repos}
          </span>
          <span className="badge badge-danger">
            Public Gists : {public_gists}
          </span>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <Repolist repos={repos} />
      </div>
    </div>
  );
};
export default User;
