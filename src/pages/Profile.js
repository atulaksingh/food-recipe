import React from "react";
import { useAuth } from "../AuthContext/AuthContext";

function Profile() {
  const { currentUser } = useAuth();
  console.log("us", currentUser);
  return (
    <>
      <div>Profile</div>
      <div>{JSON.stringify(currentUser, null, 2)}</div>
    </>
  );
}

export default Profile;
