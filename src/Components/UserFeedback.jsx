import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import axios from "axios";
import DrawerComp from "./Drawer.Component";
import { notification } from "antd";
const UserFeedback = () => {
  //Notification//
  const openNotification = (type, message) => {
    api[type]({
      message: type,
      description: message,
      duration: 3,
    });
  };
  //
  const { TextArea } = Input;
  //UseStates for UserFeedback
  const [searched, setSearched] = useState("");
  const [feedbackData, setFeedBackData] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [UserEmail, setUserEmail] = useState({});
  const [message, setMessage] = useState();
  const [subject, setSubject] = useState();
  const [api, contextHolder] = notification.useNotification();
  //End of UseStates

  useEffect(() => {
    const getUserFeedback = async () => {
      const feedback = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/userfeedback/`
      );

      setFeedBackData(feedback.data.data);
    };
    getUserFeedback();
  }, []);
  ///Hooks//
  const handleSendMail = async () => {
    if (UserEmail && message && subject) {
      const data = {
        email: UserEmail,
        message: message,
        subject: subject,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/userFeedback/reply`,
        data
      );
      console.log(res);
      res.status == 200
        ? openNotification("success", res.data.message)
        : openNotification("error", "Mail not Sent");
    } else {
      openNotification("error", "Mail not Sent");
    }
  };

  return (
    <>
      <div className="user-feedback-wrapper">
        <Input
          type="text"
          onChange={(e) => {
            setSearched(e.target.value);
          }}
          placeholder="Search Here....."
        />
        {feedbackData &&
          feedbackData
            .filter((item) => {
              return searched.toLowerCase() == ""
                ? item
                : item.first_name
                    .toLowerCase()
                    .includes(searched.toLowerCase());
            })
            .map((item, index) => {
              return (
                <UserFeedbackCard
                  key={index}
                  image={item.image}
                  name={item.name}
                  message={item.message}
                  date={item.date}
                  time={item.time}
                  email={item.email}
                  openDrawer={openDrawer}
                  setOpenDrawer={setOpenDrawer}
                  setUserEmail={setUserEmail}
                />
              );
            })}
        <DrawerComp openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}>
          {UserEmail ? (
            ""
          ) : (
            <div
              style={{
                padding: "8px",
                background: "rgba(252, 65, 65, 0.644)",
                margin: "10px",
                borderRadius: "4px",
                color: "white",
              }}
            >
              Note : User has no Email address , Email will not be sent
            </div>
          )}
          {contextHolder}
          <div className="drawer-content-wrapper">
            <div className="drawer-content-edit">
              <label htmlFor="subject">Subject</label>
              <TextArea
                placeholder="Subject"
                autoSize={{ minRows: 2, maxRows: 3 }}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
            <div className="drawer-content-edit">
              <label htmlFor="total_words">Message</label>
              <TextArea
                placeholder="Email Body"
                autoSize={{ minRows: 4, maxRows: 8 }}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <div className="notification-content-button">
              <Button type="primary" onClick={handleSendMail}>
                Send Mail
              </Button>
            </div>
          </div>
        </DrawerComp>
      </div>
    </>
  );
};

export default UserFeedback;

const UserFeedbackCard = (props) => {
  return (
    <>
      <div className="user-feedback-card-wrapper">
        <div className="user-feedback-card-icon">
          <img src={props.image} alt="icon" />
        </div>

        <div className="user-feedback-card-content">
          <span>{props.name}</span>
          <div className="user-feedback-card-content-date-time">
            <span>{props.time}</span>
            &nbsp; | &nbsp;
            <span>{props.date}</span>
          </div>
          <div className="user-feedback-card-content-messege">
            <span>{props.message}</span>
          </div>

          <div className="user-feedback-card-buttons">
            <Button type="text">User Details </Button>
            <Button
              type="text"
              onClick={() => {
                props.setOpenDrawer(true);
                props.setUserEmail(props.email);
              }}
            >
              Reply
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
