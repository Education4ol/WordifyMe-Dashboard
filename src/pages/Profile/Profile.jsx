import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/SidebarComponent"; // Import the Sidebar component
import "./Profile.css";
import { Breadcrumb, Layout, theme } from "antd";
import NotificationComponent from "../../Components/NotificationComponent";
import WordCategoryComponent from "../../Components/WordCategoryComponent";
import UserFeedback from "../../Components/UserFeedback";
import { UserOutlined, NotificationOutlined } from "@ant-design/icons";
import HomePage from "../HomePage";
import UserComp from "../../Components/UserComp";
const { Header, Content, Footer } = Layout;

///////////////////////////////////////////////////////
const App = () => {
  ////////States///////////////////////////
  const [collapsed, setCollapsed] = useState(false);
  const [elementKey, setElementKey] = useState("");

  /////////////////////////////////////////////////////

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  ////////////Fetching users////////////////////////////

  //////////////////////////////////////////////////////
  ////////////////Function to toggle Content//////////////////////
  const handleMenuItemClick = (item) => {
    setElementKey(item.key);
  };
  ///////////////////////////////////////////////////////////////
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        handleMenuItemClick={handleMenuItemClick}
      />
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
              float: "right",
              paddingRight: "20px",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                border: "1px #4f0386 solid",
                borderRadius: "50%",
                height: "45px",
                width: "45px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NotificationOutlined />
            </div>
            <div
              style={{
                display: "flex",
                border: "1px #4f0386 solid",
                borderRadius: "50%",
                height: "45px",
                width: "45px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <UserOutlined />
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          ></Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: "100%",
              background: colorBgContainer,
            }}
          >
            {elementKey == 1 ? (
              <HomePage />
            ) : elementKey == 5 ? (
              <UserComp />
            ) : elementKey == 2 ? (
              <NotificationComponent push={true} />
            ) : elementKey == 3 ? (
              <NotificationComponent whatsapp={true} />
            ) : elementKey == 4 ? (
              <NotificationComponent email={true} />
            ) : elementKey == 6 ? (
              <WordCategoryComponent />
            ) : elementKey == 7 ? (
              <UserFeedback />
            ) : (
              ""
            )}
          </div>
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};
export default App;
