import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { notification } from "antd";
import axios from "axios";
const EditUser = (props) => {
  const [api, contextHolder] = notification.useNotification();
  //Notifications
  const openNotification = (type, message) => {
    api[type]({
      message: "Success",
      description: message,
      duration: 3,
    });
  };
  useEffect(() => {
    setData({
      name: props.editData.name,
      contact: props.editData.contact,
    });
  }, []);

  //End of Notification
  //Edit USer States

  const [data, setData] = useState({
    name: "",
    contact: "",
  });
  ///End of States

  //Functions

  const editUserName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });

    console.log(data);
  };

  const editUserContact = (e) => {
    setData({
      ...data,
      contact: e.target.value,
    });
    console.log(data);
  };

  const handleSave = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/backendUsers/${props.editData._id}`,
      data
    );
    if (response) {
      openNotification("success", "User Updated Successfully");
    }
  };
  ///End of Functions

  return (
    <>
      {contextHolder}
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
    </>
  );
};

export default EditUser;
