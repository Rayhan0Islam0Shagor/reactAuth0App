import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import JSONpretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h1>Name: {user.name}</h1>
        <p>Email: {user.email}</p>
      </div>
    )
  );
};

export default Profile;
