import React, { useEffect, useState } from "react";
import { Input, Button, Select } from "antd";
import axios from "axios";
const NotificationComponent = (props) => {
  //States//

  const [options, setOptions] = useState();
  //
  //fETCTHING uSERS//
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/`);
      const users = data.data.users;
      const optionData = [];
      users.map((user) => {
        optionData.push({
          value: user.email,
          label: user.name,
        });
      });
      setOptions(optionData);
    };
    getData();
  }, []);

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const { TextArea } = Input;
  return (
    <>
      {props.push ? (
        <div className="notification-wrapper">
          <div className="push-notification-content">
            <div className="notification-title-content">
              <span>Message Title</span>
              <TextArea
                placeholder="Message Title"
                autoSize={{ minRows: 2, maxRows: 3 }}
              />
            </div>
            <div className="notification-body-content">
              <span>Message Body</span>
              <TextArea
                placeholder="Message Body"
                autoSize={{ minRows: 4, maxRows: 8 }}
              />
            </div>
          </div>
          <div className="notification-content-button">
            <Button>Send Notification</Button>
          </div>
        </div>
      ) : props.whatsapp ? (
        <div className="notification-wrapper">
          <div className="whatsapp-notification-content">
            <div className="notification-body-content">
              <span>Message Body</span>
              <TextArea
                placeholder="Message Body"
                autoSize={{ minRows: 4, maxRows: 8 }}
              />
            </div>
          </div>
          <div className="notification-content-button">
            <Button>Send Notification</Button>
          </div>
        </div>
      ) : props.email ? (
        <div className="notification-wrapper">
          <div className="email-notification-content">
            <div className="notification-title-content">
              <span>To</span>
              <Select
                mode="multiple"
                size="default"
                placeholder="Please select"
                onChange={handleChange}
                style={{
                  width: "100%",
                }}
                options={options}
              />
            </div>

            <div className="notification-title-content">
              <span>Subject</span>
              <TextArea
                placeholder="Subject"
                autoSize={{ minRows: 2, maxRows: 3 }}
              />
            </div>
            <div className="notification-body-content">
              <span>Email Body</span>
              <TextArea
                placeholder="Email Body"
                autoSize={{ minRows: 4, maxRows: 8 }}
              />
            </div>
          </div>
          <div className="notification-content-button">
            <Button>Send Email</Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NotificationComponent;
