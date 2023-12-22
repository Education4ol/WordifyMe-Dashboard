import React, { useState } from "react";
import { Input, Button, Select } from "antd";
const AddWordCategory = (props) => {
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

  //Functions
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

  //END

  return (
    <div>
      <div className="drawer-content-wrapper">
        <div className="drawer-content-edit">
          <label htmlFor="category_name">Category Name</label>
          <Input
            placeholder="Category Name"
            id="category_name"
            name="category_name"
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          />
        </div>
        <div className="drawer-content-edit">
          <label htmlFor="total_words">Total Words</label>
          <Input
            placeholder="Total words"
            id="total_words"
            name="total_words"
            onChange={(e) => {
              setTotalWords(e.target.value);
            }}
          />
        </div>
        <div className="drawer-content-edit">
          <label htmlFor="premium">Premium</label>
          <Select
            defaultValue={false}
            style={{
              width: 120,
            }}
            onChange={() => setPremium(value)}
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
            onChange={() => setCompleted(value)}
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
          <label htmlFor="completed">Tags</label>
          {tagName.map((tag, index) => {
            return (
              <Input
                placeholder={tag}
                id="total_words"
                name="total_words"
                onChange={(e) => handleTahNameChange(e, index)}
              />
            );
          })}
        </div>
        <Button type="primary" onClick={addTag} style={{ width: "120px" }}>
          Add Tags
        </Button>
        <label htmlFor="wordlist"> WordsList</label>
        <div className="drawer-content-edit">
          {wordList.map((word, index) => {
            return (
              <>
                <label htmlFor="isKnown">is Known</label>
                <Input
                  id="isKnown"
                  name="isKnown"
                  onChange={(e) => {
                    setIsKnown(e, index);
                  }}
                />
                <label htmlFor="word">Word</label>
                <Input
                  id="word"
                  name="word"
                  onChange={(e) => {
                    setWord(e, index);
                  }}
                />
                <label htmlFor="useCase">Use Case</label>
                <Input
                  id="useCase"
                  name="useCase"
                  onChange={(e) => {
                    setUseCase(e, index);
                  }}
                />
                <label htmlFor="meaning">Meaning</label>
                <Input
                  id="meaning"
                  name="meaning"
                  onChange={(e) => setMeaning(e, index)}
                />
              </>
            );
          })}
          <Button type="primary" onClick={addWord} style={{ width: "120px" }}>
            Add Word
          </Button>
        </div>
        <div className="drawer-content-edit-button">
          <Button onClick={onConfirm}>Confirm</Button>
          <Button onClick={props.onSave}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default AddWordCategory;
