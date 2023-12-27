import React, { useState } from "react";
import { Input, Button, Select } from "antd";
const AddWordCategory = (props) => {
	//State
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
	//End of States
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

	const setImage = (e, index) => {
		const data = [...wordList];
		data[index].Image = e.target.value;
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
						required={true}
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
						required={true}
						id="total_words"
						name="total_words"
						onChange={(e) => {
							setTotalWords(e.target.value);
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
				</div>
				<div className="drawer-content-edit">
					<label htmlFor="completed">Tags</label>
					{tagName.map((tag, index) => {
						return (
							<Input
								key={index}
								placeholder={tag}
								required={true}
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
					<div className="drawer-wordlist-wrapper">
						{wordList.map((word, index) => {
							return (
								<>
									<div className="drawer-word-card">
										<div className="drawer-word-card-top">
											<div className="drawer-content-edit">
												<label htmlFor="image">Image</label>
												<Input
													id="image"
													name="image"
													onChange={(e) => {
														setImage(e, index);
													}}
												/>
											</div>
											<div className="drawer-content-edit">
												<label htmlFor="isKnown">is Known</label>
												<Input
													id="isKnown"
													required={true}
													name="isKnown"
													onChange={(e) => {
														setIsKnown(e, index);
													}}
												/>
											</div>
											<div className="drawer-content-edit">
												<label htmlFor="word">Word</label>
												<Input
													id="word"
													required={true}
													name="word"
													onChange={(e) => {
														setWord(e, index);
													}}
												/>
											</div>
										</div>
										<label htmlFor="useCase">Use Case</label>
										<Input
											id="useCase"
											required={true}
											name="useCase"
											onChange={(e) => {
												setUseCase(e, index);
											}}
										/>
										<label htmlFor="meaning">Meaning</label>
										<Input
											id="meaning"
											required={true}
											name="meaning"
											onChange={(e) => setMeaning(e, index)}
										/>
									</div>
								</>
							);
						})}
					</div>
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
