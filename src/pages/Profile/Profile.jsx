import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/SidebarComponent"; // Import the Sidebar component
import data from "../../assets/data";
import "./Profile.css";
import axios from "axios";
import { Breadcrumb, Layout, Menu, theme, Button, Input } from "antd";
import NotificationComponent from "../../Components/NotificationComponent";
import TableComponent from "../../Components/TableComponent";
import DrawerComponent from "../../Components/DrawerComponent";
import WordCategoryComponent from "../../Components/WordCategoryComponent";
import UserFeedback from "../../Components/UserFeedback";
import { UndoOutlined } from "@ant-design/icons";
import DrawerComp from "../../Components/Drawer.Component";
import EditUser from "../../Components/EditUser";
const { Header, Content, Footer } = Layout;

///////////////////////////////////////////////////////
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [elementKey, setElementKey] = useState("");

  ////////Drawer functions///////////////////////////
  const [openDrawer, setOpenDrawer] = useState(false);
  const [editData, setEditData] = useState("");
  const [searched, setSearched] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const handleRefresh = () => {
    setSearched("");
  };
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${import.meta.env.VITE_LOCAL_URL}/users`);
      const userData = data.data.data.users;
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
            src="https://i.pinimg.com/564x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
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
        />
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
            {elementKey == 4 ? (
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
            ) : elementKey == 1 ? (
              <NotificationComponent push={true} />
            ) : elementKey == 2 ? (
              <NotificationComponent whatsapp={true} />
            ) : elementKey == 3 ? (
              <NotificationComponent email={true} />
            ) : elementKey == 5 ? (
              <WordCategoryComponent />
            ) : elementKey == 6 ? (
              <UserFeedback />
            ) : (
              ""
            )}
          </div>
          {/* Drawer Component */}
          {/* <DrawerComponent
            open={open}
            setOpen={setOpen}
            onClose={onClose}
            editData={editData}
            setEditData={setEditData}
            dataSource={dataSource}
            setDataSource={setDataSource}
            editDetails={true}
          /> */}
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
