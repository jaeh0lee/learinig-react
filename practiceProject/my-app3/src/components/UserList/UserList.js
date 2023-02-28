import React from "react";
import Card from "../Ul/Card";
import ErrorModal from "../Ul/ErrorModal";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div>
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.name} years old)
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UserList;
