import React from "react";

const FormList = (props) => {
  return (
    <div>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>{user.input}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;
