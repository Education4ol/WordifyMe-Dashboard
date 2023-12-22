import React, { useState } from "react";
import { Input, Button } from "antd";
import axios from "axios";
const EditUser = (props) => {
  //Notifications
  const openNotification = (type, message) => {
    api[type]({
      message: "Success",
      description: message,
      duration: 3,
    });
  };

  //End of Notification
  //Edit USer States
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  ///End of States
  //Functions

  const editUserName = (e) => {
    if (typeof e.target.value != "undefined") {
      setName(e.target.value);
    } else {
      setName(editData.name);
    }
    console.log(typeof contact);
  };

  const editUserContact = (e) => {
    if (typeof e.target.value != "undefined") {
      setContact(e.target.value);
    } else {
      setContact(editData.contact);
    }
  };

  const handleSave = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_LOCAL_URL}/users/${props.editData._id}`,
      {
        name,
        contact,
      }
    );
    if (response) {
      openNotification("success", "User Updated Successfully");
    }
  };
  ///End of Functions
  return (
    <div className="drawer-content-wrapper">
      <div className="drawer-content-edit">
        <label htmlFor="name"> Name</label>
        <Input
          placeholder={props.editData.name}
          id="name"
          name="name"
          onChange={(e) => editUserName(e)}
        />
      </div>
      <div className="drawer-content-edit">
        <label htmlFor="contact"> Contact</label>
        <Input
          placeholder={props.editData.contact}
          id="contact"
          name="contact"
          onChange={(e) => editUserContact(e)}
        />
      </div>
      <div className="drawer-content-edit">
        <label htmlFor="status">Status</label>
        <Input
          placeholder={props.editData.status}
          id="status"
          name="status"
          onKeyUp={(e) => {
            setStatus(e.target.value);
          }}
        />
      </div>
      <div className="drawer-content-edit-button">
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditUser;
