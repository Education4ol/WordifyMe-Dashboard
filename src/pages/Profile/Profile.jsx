import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/SidebarComponent"; // Import the Sidebar component
import "./Profile.css";
import axios from "axios";
import { Breadcrumb, Layout, Menu, theme, Button, Input } from "antd";
import NotificationComponent from "../../Components/NotificationComponent";
import TableComponent from "../../Components/TableComponent";

import WordCategoryComponent from "../../Components/WordCategoryComponent";
import UserFeedback from "../../Components/UserFeedback";
import {
  UndoOutlined,
  UserOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import DrawerComp from "../../Components/Drawer.Component";
import EditUser from "../../Components/EditUser";
import HomePage from "../HomePage";
const { Header, Content, Footer } = Layout;

///////////////////////////////////////////////////////
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [elementKey, setElementKey] = useState("");

  ////////States///////////////////////////
  const [openDrawer, setOpenDrawer] = useState(false);
  const [editData, setEditData] = useState("");
  const [searched, setSearched] = useState("");
  const [dataSource, setDataSource] = useState([]);
  ////////End of States/////////////////////

  const handleRefresh = () => {
    setSearched("");
  };
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/`);
      console.log(data.data.users);
      const userData = data.data.users;
      setDataSource(userData);
    };
    getData();
  }, []);

  const onClose = () => {
    setOpenDrawer(false);
  };

  const handelEdit = (record) => {
    setEditData(record);
    setOpenDrawer(true);
  };
  /////////////////////////////////////////////////////

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  ////////////Fetching users////////////////////////////

  const columns = [
    {
      title: "Users",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="username-profile-img-container">
          <img
            src={record.profileImage}
            alt={text}
            style={{ width: "50px", marginRight: "10px" }}
          />
          {text}
        </div>
      ),
      filteredValue: [searched],
      onFilter: (value, record) => {
        return (
          String(record.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.contact).toLowerCase().includes(value.toLowerCase()) ||
          String(record.status).toLowerCase().includes(value.toLowerCase())
        );
      },
      shouldCellUpdate: (prevRecord, nextRecord) =>
        prevRecord.name !== nextRecord.name,
    },
    {
      title: "Conatact No",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <div
          style={{
            fontWeight: "600",
            color: text === "paid" ? "green" : "red",
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: "Joining Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },

    {
      title: "",
      dataIndex: "action",
      key: "_id",
      render: (text, record) => (
        <Button
          onClick={() => {
            handelEdit(record);
          }}
        >
          Edit
        </Button>
      ),
    },
  ];

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
              <div>
                <Input
                  placeholder="Search Here....."
                  onChange={(e) => {
                    setSearched(e.target.value);
                  }}
                  style={{ width: "50%", marginBottom: 10 }}
                />
                &nbsp;&nbsp;
                <Button icon={<UndoOutlined />} onClick={handleRefresh}>
                  refresh
                </Button>
                <TableComponent columns={columns} dataSource={dataSource} />
              </div>
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
          {/* Drawer Component */}
          <DrawerComp openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}>
            <EditUser editData={editData} />
          </DrawerComp>
          ;
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
