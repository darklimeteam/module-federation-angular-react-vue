import React, { FunctionComponent } from "react";

import "./profile-style.css";

export interface IUser {
  name: string;
  email: string;
}

export interface IProfileProps {
  name: string;
  email: string;
  onClick: (IUser) => void;
}

export const ProfileReactComponent: FunctionComponent<IProfileProps> = (
  props: IProfileProps
) => {
  const updateCurrentUser = (newUser: IUser) => {
    props.onClick(newUser);
  };

  return (
    <div className="container">
      <form style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={props.name} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={props.email} />
        </div>
        <button
          onClick={() =>
            updateCurrentUser({ name: props.name, email: props.email })
          }
        >
          Summit
        </button>
      </form>
    </div>
  );
};
