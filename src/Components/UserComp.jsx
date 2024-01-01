import React, { useState, useEffect } from "react";
import TableComponent from "./TableComponent";
import DrawerComp from "./Drawer.Component";
import EditUser from "./EditUser";
import { Input, Button, Modal } from "antd";
import axios from "axios";
import ViewUsers from "./ViewUsers";
import {
  UndoOutlined,
  UserOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
const UserComp = () => {
  //Fetch Users
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/`);

      const userData = data.data.users;
      setDataSource(userData);
    };
    getData();
  }, []);
  //States
  const [openDrawer, setOpenDrawer] = useState(false);
  const [editData, setEditData] = useState("");
  const [searched, setSearched] = useState("");
  const [viewData, setViewData] = useState();
  const [dataSource, setDataSource] = useState([]);
  const [modal2Open, setModal2Open] = useState(false);
  //Table Columns
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
      title: "Email",
      dataIndex: "email",
      key: "email",
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
            handleView(record);
            setModal2Open(true);
          }}
        >
          View
        </Button>
      ),
    },
  ];
  //Hooks
  const onClose = () => {
    setOpenDrawer(false);
  };

  const handleView = (record) => {
    setViewData(record);
  };

  // const handelEdit = (record) => {
  //   setEditData(record);
  //   setOpenDrawer(true);
  // };

  const handleRefresh = () => {
    setSearched("");
  };

  return (
    <>
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
      <DrawerComp openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}>
        <EditUser editData={editData} setDataSource={setDataSource} />
      </DrawerComp>
      {viewData && (
        <Modal
          title={viewData.name}
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          cancelText="Edit"
        >
          <ViewUsers viewData={viewData} />
        </Modal>
      )}
    </>
  );
};

export default UserComp;
