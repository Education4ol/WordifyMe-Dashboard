import React, { useEffect, useState } from "react";
import WordCategoryCardComponent from "./WordCategoryCardComponent";
import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

import { notification } from "antd";
import DrawerComp from "./Drawer.Component";
import AddWordCategory from "./AddWordCategory";

///Notification////
const WordCategoryComponent = () => {
  const openNotification = (type, message) => {
    api[type]({
      message: type,
      description: message,
      duration: 3,
    });
  };

  const [searchedText, setSearchedText] = useState("");
  const [wordCategoryData, setWordCategoryData] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const [removeCategory, setRemoveCategory] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [addCategory, setAddCategory] = useState({
    name: "",
    isCompleted: "",
    isPremium: false,
    likes: "",
    totalWords: "",
    tags: ["tag_name"],
    wordsList: [
      {
        isKnown: "",
        word: "",
        meaning: "",
        Image: "",
        use_case: "",
      },
    ],
  });
  const [UpdateCategory, setUpdateCategory] = useState([{}]);
  //UseEffect//
  useEffect(() => {
    const getWordCategories = async () => {
      const categories = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/wordcategory`
      );
      setWordCategoryData(categories.data.data.wordCategories);
    };
    getWordCategories();
  }, []);
  ////////////
  const triggerDrawer = () => {
    setOpenDrawer(true);
  };

  const onSave = async () => {
    if (addCategory.name) {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/wordcategory/create`,
        addCategory
      );
      if (res.status == 200) {
        openNotification("success", res.data.message);
        const getWordCategories = async () => {
          const categories = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/wordcategory`
          );
          setWordCategoryData(categories.data.data.wordCategories);
        };
        getWordCategories();
      }
    } else {
      openNotification("error", "Atleast Name is Required");
    }
  };
  const deleteCategory = async (id) => {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/wordcategory/delete`,
      {
        _id: id,
      }
    );
    if (res.status == 200) {
      openNotification("success", res.data.message);
      const getWordCategories = async () => {
        const categories = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/wordcategory`
        );
        setWordCategoryData(categories.data.data.wordCategories);
      };
      getWordCategories();
    }
  };

  return (
    <>
      {contextHolder}
      <div className="word-catergory-wrapper">
        <div className="word-category-input-btn-container">
          <div className="word-category-title-input">
            <span>List of Word Category</span>
            <Input
              type="text"
              onChange={(e) => {
                setSearchedText(e.target.value);
              }}
            />
          </div>
          <Button icon={<PlusOutlined />} onClick={triggerDrawer}>
            Add New Category
          </Button>
        </div>
        <div className="word-category-cards-container">
          {wordCategoryData
            ? wordCategoryData
                .filter((item) => {
                  return searchedText.toLowerCase() == ""
                    ? item
                    : item.name
                        .toLowerCase()
                        .includes(searchedText.toLowerCase());
                })
                .map((item, index) => {
                  return (
                    <WordCategoryCardComponent
                      icon={item.icon}
                      key={index}
                      name={item.name}
                      wordlist={item.wordsList}
                      item={item}
                      UpdateCategory={UpdateCategory}
                      setUpdateCategory={setUpdateCategory}
                      setRemoveCategory={setRemoveCategory}
                      onDelete={deleteCategory}
                      setWordCategoryData={setWordCategoryData}
                    />
                  );
                })
            : "No data to display"}
        </div>
      </div>

      <DrawerComp
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        title="Add Category"
      >
        <AddWordCategory
          onSave={onSave}
          setAddCategory={setAddCategory}
          addCategory={addCategory}
        />
      </DrawerComp>
    </>
  );
};

export default WordCategoryComponent;
