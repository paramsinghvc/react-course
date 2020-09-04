import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

export default function UserDetails() {
  const { userId } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((res) => res.json())
      .then((_user) => {
        setUser(_user);
      });
  }, [userId]);

  return (
    <div style={{ border: "1px solid black" }}>
      <Link to="/">Go back to Home</Link>
      {user ? (
        <>
          <p>Username: {user.login}</p>
          <img src={user.avatar_url} alt={user.login} height="150" />
          <p>
            Github link: <a href={user.html_url}>{user.login}</a>
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
