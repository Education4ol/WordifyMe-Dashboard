import React, { useState } from "react";
import WordCategoryCardComponent from "./WordCategoryCardComponent";
import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import wordCategory from "../assets/WordCategoryData";

const WordCategoryComponent = () => {
	const [searchedText, setSearchedText] = useState("");
	return (
		<>
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
					<Button icon={<PlusOutlined />}>Add New Category</Button>
				</div>
				<div className="word-category-cards-container">
					{wordCategory
						.filter((item) => {
							return searchedText.toLowerCase() == ""
								? item
								: item.name.toLowerCase().includes(searchedText.toLowerCase());
						})
						.map((item, index) => {
							return (
								<WordCategoryCardComponent
									icon={item.icon}
									key={index}
									name={item.name}
									wordlist={item.wordsList}
								/>
							);
						})}
				</div>
			</div>
		</>
	);
};

export default WordCategoryComponent;
