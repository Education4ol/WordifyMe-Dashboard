import React, { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ModalComponent from "./ModalComponent";
const WordCategoryCardComponent = (props) => {
  const { wordlist, item } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="word-category-card-wrapper">
        <div className="word-category-card-icon">
          <img src={props.image} alt="icon" />
        </div>
        <div className="word-category-card-content">
          <span>{props.name}</span>

          <div className="word-category-card-word-count">
            <span>{`${wordlist.length} words`}</span>
            <Button shape="circle" onClick={showModal}>
              <ArrowRightOutlined style={{ color: "white" }} />
            </Button>
          </div>
        </div>
      </div>
      <ModalComponent
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        name={props.name}
        item={item}
        UpdateCategory={props.UpdateCategory}
        setUpdateCategory={props.setUpdateCategory}
        setRemoveCategory={props.setRemoveCategory}
        onDelete={props.onDelete}
        setWordCategoryData={props.setWordCategoryData}
      />
    </>
  );
};

export default WordCategoryCardComponent;
