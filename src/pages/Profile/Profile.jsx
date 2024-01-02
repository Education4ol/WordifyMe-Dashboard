import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/SidebarComponent"; // Import the Sidebar component
import "./Profile.css";
import { Breadcrumb, Layout, theme } from "antd";
import NotificationComponent from "../../Components/NotificationComponent";
import WordCategoryComponent from "../../Components/WordCategoryComponent";
import UserFeedback from "../../Components/UserFeedback";
import { BellFilled } from "@ant-design/icons";
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
                height: "40px",
                width: "60px",
                borderRight: "2px solid #818181",
              }}
            >
              <div
                style={{
                  display: "flex",

                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255, 0, 0, 0.199)",
                }}
              >
                <BellFilled style={{ color: "rgb(218, 8, 8)" }} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginLeft: "5px",
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  gap: "4px",
                }}
              >
                <img
                  src="https://imgs.search.brave.com/9sVeCtcqC_h7ybwv92UxNIOgdDNzBR_xJRITZrWDlvU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1iZWFyZGVk/LW1hbi13aXRoLXN0/cmlwZWQtc2hpcnRf/MjczNjA5LTU2Nzcu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
                  alt="user logo"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <span style={{ color: "#818181", fontWeight: 500 }}>
                UserName
              </span>
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
