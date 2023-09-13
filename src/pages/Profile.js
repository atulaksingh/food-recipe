import React from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
function Profile() {
  const { currentUser } = useAuth();
  console.log("us", currentUser);
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <>
        <ToastContainer />

      <div>Profile</div>
      <div>{JSON.stringify(currentUser, null, 2)}</div>
      <div>
        <button onClick={()=>{   toast("Custom Style Notification with css class!", {
        position: toast.POSITION.TOP_RIGHT,
        className: 'foo-bar'
      });}}>Notify</button>
      </div>
    </>
  );
}

export default Profile;
