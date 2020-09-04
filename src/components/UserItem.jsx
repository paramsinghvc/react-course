import React from "react";
import { Link } from "react-router-dom";

export default function UserItem({ data: { login, avatar_url, html_url } }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <p>Username: {login}</p>
      <Link to={`/user/${login}`}>
        <img src={avatar_url} alt={login} height="150" />
      </Link>
      <p>
        Github link: <a href={html_url}>{login}</a>
      </p>
    </div>
  );
}
