import React, { useState } from "react";
import { Input, Button, Select } from "antd";
const EditWordCategory = (props) => {
	//States
	const [editTags, setEditTags] = useState([]);
	const [editWordList, setEditWordList] = useState([{}]);

	//ENd of States
	//Functions

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
	//End of Functions
	return (
		<div className="drawer-content-wrapper">
			<div className="drawer-content-edit">
				<label htmlFor="category_name">Category Name</label>
				<Input
					placeholder={props.category.name}
					id="category_name"
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
							<div className="drawer-word-card" key={index}>
								<div className="drawer-word-card-top">
									<div className="drawer-content-edit">
										<label htmlFor="image">Image</label>
										<Input
											id="image"
											name="image"
											placeholder={word.Image}
											onChange={(e) => {
												editIsKnown(e, index);
											}}
										/>
									</div>
									<div className="drawer-content-edit">
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
									<div className="drawer-content-edit">
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
								<div className="drawer-content-edit">
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
				<Button onClick={props.onSaveEdit}>Save</Button>
			</div>
		</div>
	);
};

export default EditWordCategory;
