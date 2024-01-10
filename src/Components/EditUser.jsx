import React, { useEffect, useState } from "react";
import { Input, Button, Select } from "antd";
import { notification } from "antd";
import { Modal, Space } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

import axios from "axios";
const { confirm } = Modal;
const showConfirm = (data, setState) => {
  confirm({
    title: "Do you Want to Edit the User",
    icon: <ExclamationCircleFilled />,
    content: <Space></Space>,
    onOk() {
      setState(data);
    },
    onCancel() {},
  });
};
const EditUser = (props) => {
  const [api, contextHolder] = notification.useNotification();
  const [editIntrest, setEditIntrest] = useState([]);
  const [gender, setGender] = useState("");
  //Notifications
  const openNotification = (type, message) => {
    api[type]({
      message: "Success",
      description: message,
      duration: 3,
    });
  };
  useEffect(() => {
    setUserData(props.editData);
    setEditIntrest(props.editData.interest);
  }, []);

  //End of Notification
  //Edit USer States

  const [userData, setUserData] = useState({});
  ///End of States

  //Functions
  const editUserName = (e) => {
    const data = { ...userData, name: e.target.value };
    setUserData(data);
  };

  const editUserContact = (e) => {
    const data = {
      ...userData,
      contact: e.target.value,
    };
    setUserData(data);
  };

  const setInterest = (e, index) => {
    const data = [...editIntrest];
    data[index] = e.target.value;
    setEditIntrest(data);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const addIntrest = () => {
    const data = [...editIntrest, "not_set"];
    setEditIntrest(data);
  };
  ///Onclick Functions
  const handleSave = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/update/${props.editData._id}`,
      userData
    );
    if (response) {
      openNotification("success", "User Updated Successfully");
      const getData = async () => {
        const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/`);

        const userData = data.data.users;
        setDataSource(userData);
      };
      getData();
    }
  };

  const onConfirm = () => {
    const data = {
      address: userData.address,
      city: userData.city,
      college: userData.college,
      contact: userData.contact,
      email: userData.email,
      examAspirant: userData.examAspirant,
      gender: userData.gender,
      interest: editIntrest,
      level_of_english: userData.level_of_english,
      name: userData.name,
      points: userData.points,
      premiumUser: userData.premiumUser,
      profession: userData.profession,
      profileImage: userData.profileImage,
      walletMoney: userData.walletMoney,
    };
    showConfirm(data, setUserData);
  };
  ///End of Functions

  return (
    <>
      {contextHolder}

      <div className="drawer-content-wrapper">
        <div className="edit-user-drawer-content">
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="name"> Name</label>
            <Input
              placeholder={props.editData.name}
              id="name"
              name="name"
              onChange={(e) => editUserName(e)}
            />
          </div>

          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="contact"> Contact</label>
            <Input
              placeholder={props.editData.contact}
              id="contact"
              name="contact"
              onChange={(e) => editUserContact(e)}
            />
          </div>
        </div>
        <div className="edit-user-drawer-content">
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">Email</label>
            <Input
              placeholder={props.editData.email}
              id="status"
              name="status"
              onKeyUp={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">City</label>
            <Input
              placeholder={props.editData.city}
              id="status"
              name="status"
              onKeyUp={(e) => {
                setUserData({ ...userData, city: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="edit-user-drawer-content">
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">College</label>
            <Input
              placeholder={props.editData.college}
              id="status"
              name="status"
              onKeyUp={(e) => {
                setUserData({ ...userData, college: e.target.value });
              }}
            />
          </div>
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">Wallet Money</label>
            <Input
              placeholder={props.editData.walletMoney}
              id="status"
              name="status"
              onKeyUp={(e) => {
                setUserData({
                  ...userData,
                  walletMoney: parseInt(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="edit-user-drawer-content">
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">Gender</label>
            <Select
              defaultValue={props.editData.gender}
              style={{
                width: "100%",
              }}
              onChange={handleChange}
              options={[
                {
                  value: "male",
                  label: "Male",
                },
                {
                  value: "female",
                  label: "Female",
                },
                {
                  value: "others",
                  label: "Others",
                },
              ]}
            />
          </div>
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">Address</label>
            <Input
              placeholder={props.editData.address}
              id="status"
              name="status"
              onKeyUp={(e) => {
                setUserData({ ...userData, address: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="edit-user-drawer-content">
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">Profile Image</label>
            <Input
              placeholder={props.editData.profileImage}
              id="status"
              name="status"
              onKeyUp={(e) => {
                setUserData({ ...userData, profileImage: e.target.value });
              }}
            />
          </div>
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">Points</label>
            <Input
              placeholder={props.editData.points}
              id="status"
              name="status"
              onKeyUp={(e) => {
                setUserData({ ...userData, points: parseInt(e.target.value) });
              }}
            />
          </div>
        </div>
        <div className="edit-user-drawer-content">
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">Profession</label>
            <Input
              placeholder={props.editData.profession}
              id="status"
              name="status"
              onKeyUp={(e) => {
                setUserData({ ...userData, profession: e.target.value });
              }}
            />
          </div>
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">Level of English</label>
            <Input
              placeholder={props.editData.level_of_english}
              id="status"
              name="status"
              onKeyUp={(e) => {
                setUserData({ ...userData, level_of_english: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="edit-user-drawer-content">
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">Exam Aspirant</label>
            <Select
              defaultValue={props.editData.examAspirant}
              style={{
                width: "100%",
              }}
              onChange={(value) => {
                setUserData({ ...userData, examAspirant: value });
              }}
              options={[
                {
                  value: false,
                  label: "False",
                },
                {
                  value: true,
                  label: "True",
                },
              ]}
            />
          </div>
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">Premium User</label>
            <Select
              defaultValue={props.editData.premiumUser}
              style={{
                width: "100%",
              }}
              onChange={(value) => {
                setUserData({ ...userData, premiumUser: value });
              }}
              options={[
                {
                  value: false,
                  label: "False",
                },
                {
                  value: true,
                  label: "True",
                },
              ]}
            />
          </div>
        </div>
        <div className="edit-user-drawer-content">
          <div className="drawer-content-edit" style={{ width: "50%" }}>
            <label htmlFor="status">Intrest</label>
            {editIntrest.map((interest, index) => {
              return (
                <Input
                  placeholder={interest}
                  id="status"
                  name="status"
                  onChange={(e) => {
                    setInterest(e, index);
                  }}
                />
              );
            })}
            <Button
              type="primary"
              onClick={addIntrest}
              style={{ width: "120px" }}
            >
              Add Intrest
            </Button>
          </div>
        </div>

        <div className="drawer-content-edit-button">
          <Button type="primary" onClick={onConfirm}>
            Confirm
          </Button>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditUser;
