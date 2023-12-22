import { Drawer, Space, Button, Input, Select } from "antd";
import React, { useState } from "react";
import { notification } from "antd";
import axios from "axios";

const DrawerComponent = (props) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState("");
  const [api, contextHolder] = notification.useNotification();
  ///////Category related useStates/////////
  const [categoryName, setCategoryName] = useState("");
  const [completed, setCompleted] = useState(false);
  const [premium, setPremium] = useState(false);
  const [totalWords, setTotalWords] = useState(0);
  const [tagName, setTagName] = useState(["tagname"]);
  const [wordList, setWordList] = useState([
    {
      isKnown: "",
      word: "",
      meaning: "",
      Image: "",
      use_case: "",
    },
  ]);
  const [editWordList, setEditWordList] = useState([{}]);
  const { editData, dataSource, setDataSource } = props;
  ///////Edit Category States///////////////////////////////
  const [categoryDetails, setCategoryDetails] = useState([{}]);
  const [editTags, setEditTags] = useState([]);
  //////Edit User Functions////////////////////////////////
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
  //////End of Edit User Functions/////////////////////////
  ////////Edit Ctegory use Functions///////////////////////
  const editCategoryName = (e) => {
    if (e.target.value != "") {
      const data = [{ ...props.category, name: e.target.value }];
      setCategoryDetails(data);
    }
  };

  const editTotalWords = (e) => {
    const data = [{ ...props.category, totalWords: e.target.value }];
    setCategoryDetails(data);
  };

  const editIsPremium = (value) => {
    const data = [{ ...props.category, isPremium: value }];
    setCategoryDetails(data);
  };

  const editIsCompleted = (value) => {
    const data = [{ ...props.category, isCompleted: value }];
  };

  const addTags = () => {
    const data = [...props.category.tags, "tagname"];
    setEditTags(data);
  };
  const handleEditTagName = (e, index) => {
    const data = [...editTags];
    data[index] = e.target.value;
    setEditTags(data);
  };
  const addWords = () => {
    const data = [
      ...props.category.wordsList,
      {
        isKnown: "",
        word: "",
        meaning: "",
        Image: "",
        use_case: "",
      },
    ];
    setEditWordList(data);
  };
  const editIsKnown = (e, index) => {
    const data = [...editWordList];
    data[index].isKnown = e.target.value;
  };

  const editWord = (e, index) => {
    const data = [...editWordList];
    data[index].word = e.target.value;
  };

  const editUseCase = (e, index) => {
    const data = [...editWordList];
    data[index].use_case = e.target.value;
  };

  const editMeaning = (e, index) => {
    const data = [...editWordList];
    data[index].meaning = e.target.value;
  };

  const onConfirmEdit = () => {
    const data = [{ ...categoryDetails }];
    setCategoryDetails(data);
    console.log(categoryDetails);
  };

  ////////////Notification///////////////////////////////
  const openNotification = (type, message) => {
    api[type]({
      message: "Success",
      description: message,
      duration: 3,
    });
  };
  //////////ADD Category Fuctions///////////////////////////

  const addTag = () => {
    const len = [...tagName, "tag_name"];
    setTagName(len);
  };

  const handleTahNameChange = (e, index) => {
    const data = [...tagName];
    data[index] = e.target.value;
    setTagName(data);
  };

  const addWord = () => {
    const data = [
      ...wordList,
      {
        isKnown: "",
        word: "",
        meaning: "",
        Image: "",
        use_case: "",
      },
    ];
    setWordList(data);
  };

  const setIsKnown = (e, index) => {
    const data = [...wordList];
    data[index].isKnown = e.target.value;
  };

  const setWord = (e, index) => {
    const data = [...wordList];
    data[index].word = e.target.value;
  };

  const setUseCase = (e, index) => {
    const data = [...wordList];
    data[index].use_case = e.target.value;
  };

  const setMeaning = (e, index) => {
    const data = [...wordList];
    data[index].meaning = e.target.value;
  };

  const onConfirm = () => {
    props.setAddCategory({
      name: categoryName,
      isCompleted: "",

      likes: "",
      totalWords: totalWords,
      tags: tagName,
      wordsList: wordList,
    });
  };
  ///////////Edit Category Functions//////////////////////

  ///////////////////User Updating/////////////////////////

  const handleSave = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_LOCAL_URL}/users/${editData._id}`,
      {
        name,
        contact,
      },

      {
        "Access-Control-Allow-Origin": true,
        withCredentials: true,
        credentials: "include",
      }
    );

    // const editedData = data.find(({ _id }) => _id == editData._id);
    // const index = data.indexOf(editedData);
    // const newData = {
    //   ...data[0],
    //   name,
    //   contact,
    //   status,
    // };
    // props.setEditData(null);
    // data.splice(index, 1, newData);
  };

  return (
    <>
      {contextHolder}
      {/* ////Edit user Details */}
      {props.editDetails && (
        <Drawer
          title="Edit Details"
          placement="right"
          size="large"
          onClose={props.onClose}
          open={props.open}
          extra={
            <Space>
              <Button onClick={props.onClose}>Cancel</Button>
              <Button type="primary" onClick={props.onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <div className="drawer-content-wrapper">
            <div className="drawer-content-edit">
              <label htmlFor="name"> Name</label>
              <Input
                placeholder={editData.name}
                id="name"
                name="name"
                onChange={(e) => editUserName(e)}
              />
            </div>
            <div className="drawer-content-edit">
              <label htmlFor="contact"> Contact</label>
              <Input
                placeholder={editData.contact}
                id="contact"
                name="contact"
                onChange={(e) => editUserContact(e)}
              />
            </div>
            <div className="drawer-content-edit">
              <label htmlFor="status">Status</label>
              <Input
                placeholder={editData.status}
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
        </Drawer>
      )}
      {/* ////Adding new Category */}

      {/* ////Editing Category */}
    </>
  );
};

export default DrawerComponent;
