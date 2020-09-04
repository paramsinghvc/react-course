import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return users.map((user) => <UserItem key={user.id} data={user} />);
}

export default UsersList;
