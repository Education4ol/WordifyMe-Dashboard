import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal, Space } from "antd";
import { Input, Button, Select } from "antd";
import { notification } from "antd";
import axios from "axios";
const { confirm } = Modal;

///Confirm Modal

const showConfirm = (data, setState) => {
  confirm({
    title: "Do you Want to Edit the Word Category",
    icon: <ExclamationCircleFilled />,
    content: <Space></Space>,
    onOk() {
      setState(data);
    },
    onCancel() {},
  });
};

//

const EditWordCategory = (props) => {
  const [modal, contextholder] = Modal.useModal();
  const [api, contextHolder] = notification.useNotification();
  const ref = useRef(null);
  ///Notification////
  const openNotification = (type, message) => {
    api["success"]({
      message: "Success",
      description: message,
      duration: 3,
    });
  };

  //////////////////
  //States
  const [editTags, setEditTags] = useState([]);
  const [editWordList, setEditWordList] = useState([{}]);
  const [categoryDetails, setCategoryDetails] = useState();
  //End of States

  //Functions
  //UseEffect///
  useEffect(() => {
    setEditWordList(props.category.wordsList);
    setEditTags(props.category.tags);
    setCategoryDetails(props.category);
  }, []);

  /////////////

  ///OnClick Functions///
  const onSaveEdit = async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/wordcategory/update/${
        props.category._id
      }`,
      categoryDetails
    );

    openNotification("Success", res.data.message);
    const getWordCategories = async () => {
      const categories = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/wordcategory`
      );
      props.setWordCategoryData(categories.data.data.wordCategories);
    };
    getWordCategories();
  };

  const onConfirmEdit = () => {
    const data = {
      name: categoryDetails.name,
      likes: categoryDetails.likes,
      totalWords: categoryDetails.totalWords,
      tags: editTags,
      wordsList: editWordList,
    };
    showConfirm(data, setCategoryDetails);
  };
  ///END/////////////
  ///
  const editCategoryName = (e) => {
    if (e.target.value != "") {
      const data = { ...categoryDetails, name: e.target.value };

      setCategoryDetails(data);
    }
  };

  const editTotalWords = (e) => {
    const data = { ...categoryDetails, totalWords: e.target.value };

    setCategoryDetails(data);
  };

  const editIsPremium = (value) => {
    const data = { ...categoryDetails, isPremium: value };
    setCategoryDetails(data);
  };

  const editIsCompleted = (value) => {
    const data = { ...categoryDetails, isCompleted: value };
    setCategoryDetails(data);
  };

  const addTags = () => {
    const tags = [...editTags, "tagname"];
    setEditTags(tags);
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

  const editImage = (e, index) => {
    const data = [...editWordList];
    data[index].Image = e.target.value;
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

  //End of Functions
  return (
    <>
      {contextHolder}
      <div className="drawer-content-wrapper">
        <div className="drawer-content-edit">
          <label htmlFor="category_name">Category Name</label>
          <Input
            placeholder={props.category.name}
            id="category_name"
            ref={ref}
            name="category_name"
            onChange={(e) => {
              editCategoryName(e);
            }}
          />
        </div>
        <div className="drawer-content-edit">
          <label htmlFor="total_words">Total Words</label>
          <Input
            placeholder={props.category.totalWords}
            id="total_words"
            name="total_words"
            onChange={(e) => {
              editTotalWords(e);
            }}
          />
        </div>
        <div className="selectors">
          <div className="drawer-content-edit">
            <label htmlFor="premium">Premium</label>
            <Select
              defaultValue={false}
              style={{
                width: 120,
              }}
              onChange={() => editIsPremium(value)}
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
          <div className="drawer-content-edit">
            <label htmlFor="completed">Completed</label>
            <Select
              defaultValue={false}
              style={{
                width: 120,
              }}
              onChange={() => editIsCompleted(value)}
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
        <div className="drawer-content-edit">
          <label htmlFor="completed">Tags</label>

          {editTags.map((tag, index) => {
            return (
              <Input
                placeholder={tag}
                id="total_words"
                name="total_words"
                onChange={(e) => handleEditTagName(e, index)}
              />
            );
          })}
        </div>
        <Button type="primary" onClick={addTags} style={{ width: "120px" }}>
          Add Tags
        </Button>
        <label htmlFor="wordlist"> WordsList</label>
        <div className="drawer-content-edit">
          <div className="drawer-wordlist-wrapper">
            {editWordList.map((word, index) => {
              return (
                <div className="drawer-word-card">
                  <div className="drawer-word-card-top">
                    <div className="drawer-content-edit" key={index}>
                      <label htmlFor="image">Image</label>
                      <Input
                        id="image"
                        name="image"
                        placeholder={word.Image}
                        onChange={(e) => {
                          editImage(e, index);
                        }}
                      />
                    </div>
                    <div className="drawer-content-edit" key={index}>
                      <label htmlFor="isKnown">is Known</label>
                      <Input
                        id="isKnown"
                        name="isKnown"
                        placeholder={word.isKnown}
                        onChange={(e) => {
                          editIsKnown(e, index);
                        }}
                      />
                    </div>
                    <div className="drawer-content-edit" key={index}>
                      <label htmlFor="word">Word</label>
                      <Input
                        id="word"
                        name="word"
                        placeholder={word.word}
                        onChange={(e) => {
                          editWord(e, index);
                        }}
                      />
                    </div>
                  </div>
                  <div className="drawer-content-edit" key={index}>
                    <label htmlFor="useCase">Use Case</label>
                    <Input
                      id="useCase"
                      name="useCase"
                      placeholder={word.use_case}
                      onChange={(e) => {
                        editUseCase(e, index);
                      }}
                    />
                  </div>
                  <label htmlFor="meaning">Meaning</label>
                  <Input
                    id="meaning"
                    name="meaning"
                    placeholder={word.meaning}
                    onChange={(e) => editMeaning(e, index)}
                  />
                </div>
              );
            })}
          </div>
          <Button type="primary" onClick={addWords} style={{ width: "120px" }}>
            Add Word
          </Button>
        </div>
        <div className="drawer-content-edit-button">
          <Button onClick={onConfirmEdit}>Confirm</Button>
          <Button onClick={onSaveEdit}>Save</Button>
        </div>
      </div>
    </>
  );
};

export default EditWordCategory;
