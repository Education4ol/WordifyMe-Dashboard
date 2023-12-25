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
		api["success"]({
			message: "Success",
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

	useEffect(() => {
		const getWordCategories = async () => {
			const categories = await axios.get(
				`${import.meta.env.VITE_BASE_URL}/wordcategory`
			);
			setWordCategoryData(categories.data.data.wordCategories);
		};
		getWordCategories();
	}, []);

	const triggerDrawer = () => {
		setOpenDrawer(true);
	};

	const onSaveEdit = async () => {
		const res = await axios.post(
			`${import.meta.env.VITE_BASE_URL}/wordcategory/update`,
			{}
		);
	};

	const onSave = async () => {
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
											onSaveEdit={onSaveEdit}
											setRemoveCategory={setRemoveCategory}
											onDelete={deleteCategory}
										/>
									);
								})
						: "No data to display"}
				</div>
			</div>
			{/* <DrawerComponent
        addCategory={addCategory}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        setAddCategory={setAddCategory}
        newCategory={true}
        onSave={onSave}
      /> */}
			<DrawerComp
				openDrawer={openDrawer}
				setOpenDrawer={setOpenDrawer}
				title="Add Category"
			>
				<AddWordCategory onSave={onSave} setAddCategory={setAddCategory} />
			</DrawerComp>
		</>
	);
};

export default WordCategoryComponent;