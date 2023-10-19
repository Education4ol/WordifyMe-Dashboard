import React, { useState } from "react";
import Sidebar from "../../Components/sidebarComponent"; // Import the Sidebar component

import "./Profile.css";

import { Breadcrumb, Layout, Menu, theme, Button } from "antd";

import TableComponent from "../../Components/TableComponent";
import DrawerComponent from "../../Components/DrawerComponent";
const { Header, Content, Footer, Sider } = Layout;

///////////////////////////////////////////////////////
const App = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [elementKey, setElementKey] = useState("");

	////////Drawer functions///////////////////////////
	const [open, setOpen] = useState(false);
	const [editData, setEditData] = useState("");

	const onClose = () => {
		setOpen(false);
	};

	const handelEdit = (record) => {
		setEditData(record);
		setOpen(true);
	};
	/////////////////////////////////////////////////////
	const [dataSource, setDataSource] = useState([
		{
			email: "audu1@email.com",
			city: "city_not_set",
			college: "college_not_set",
			dob: "dob_not_set",
			gender: "gender_not_set",
			interest: ["INTEREST_NOT_SET"],
			walletMoney: 500,
			address: "address_not_set",
			profileImage:
				"https://i.pinimg.com/564x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
			points: 40,
			favoriteWords: [],
			wordCategories: [
				{
					name: "Category 1",
					totalWords: 10,
					likes: 5,
					isPremium: false,
					tags: ["English", "Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1b",
							word: "Word 1",
							meaning: "Meaning 1",
							Image: "Image URL 1",
							use_case: "Usage 1",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1c",
							word: "Word 2",
							meaning: "Meaning 2",
							Image: "Image URL 2",
							use_case: "Usage 2",
						},
					],
				},
				{
					name: "Category 2",
					totalWords: 15,
					likes: 8,
					isPremium: true,
					tags: ["English", "Advanced Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1e",
							word: "Word 3",
							meaning: "Meaning 3",
							Image: "Image URL 3",
							use_case: "Usage 3",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1f",
							word: "Word 4",
							meaning: "Meaning 4",
							Image: "Image URL 4",
							use_case: "Usage 4",
						},
					],
				},
			],
			profession: "PROFESSION_NOT_SET",
			topics: ["Technology", "English"],
			examAspirant: true,
			premiumUser: false,
			_id: "652e8183c454ec33e4a98541",
			name: "User2",
			status: "unPaid",
			contact: "7798121777",
			password: "$2a$10$NlmK5EO04L/cF74kG9ailupzXwnCebPSCBHR9B9CJ5FAMHRUsJUha",
			level_of_english: "L1",
			createdAt: "2023-10-17T12:43:47.972Z",
			updatedAt: "2023-10-17T14:00:09.365Z",
			__v: 1,
			action: "Edit",
		},

		{
			email: "audu1@email.com",
			city: "city_not_set",
			college: "college_not_set",
			dob: "dob_not_set",
			gender: "gender_not_set",
			interest: ["INTEREST_NOT_SET"],
			walletMoney: 500,
			address: "address_not_set",
			profileImage:
				"https://i.pinimg.com/564x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
			points: 40,
			favoriteWords: [],
			wordCategories: [
				{
					name: "Category 1",
					totalWords: 10,
					likes: 5,
					isPremium: false,
					tags: ["English", "Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1b",
							word: "Word 1",
							meaning: "Meaning 1",
							Image: "Image URL 1",
							use_case: "Usage 1",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1c",
							word: "Word 2",
							meaning: "Meaning 2",
							Image: "Image URL 2",
							use_case: "Usage 2",
						},
					],
				},
				{
					name: "Category 2",
					totalWords: 15,
					likes: 8,
					isPremium: true,
					tags: ["English", "Advanced Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1e",
							word: "Word 3",
							meaning: "Meaning 3",
							Image: "Image URL 3",
							use_case: "Usage 3",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1f",
							word: "Word 4",
							meaning: "Meaning 4",
							Image: "Image URL 4",
							use_case: "Usage 4",
						},
					],
				},
			],
			profession: "PROFESSION_NOT_SET",
			topics: ["Technology", "English"],
			examAspirant: true,
			premiumUser: false,
			_id: "652e8183c454ec33e4a98541",
			name: "audumber",
			status: "Paid",
			contact: "7798121777",
			password: "$2a$10$NlmK5EO04L/cF74kG9ailupzXwnCebPSCBHR9B9CJ5FAMHRUsJUha",
			level_of_english: "L1",
			createdAt: "2023-10-17T12:43:47.972Z",
			updatedAt: "2023-10-17T14:00:09.365Z",
			__v: 1,
			action: "Edit",
		},
		{
			email: "audu1@email.com",
			city: "city_not_set",
			college: "college_not_set",
			dob: "dob_not_set",
			gender: "gender_not_set",
			interest: ["INTEREST_NOT_SET"],
			walletMoney: 500,
			address: "address_not_set",
			profileImage:
				"https://i.pinimg.com/564x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
			points: 40,
			favoriteWords: [],
			wordCategories: [
				{
					name: "Category 1",
					totalWords: 10,
					likes: 5,
					isPremium: false,
					tags: ["English", "Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1b",
							word: "Word 1",
							meaning: "Meaning 1",
							Image: "Image URL 1",
							use_case: "Usage 1",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1c",
							word: "Word 2",
							meaning: "Meaning 2",
							Image: "Image URL 2",
							use_case: "Usage 2",
						},
					],
				},
				{
					name: "Category 2",
					totalWords: 15,
					likes: 8,
					isPremium: true,
					tags: ["English", "Advanced Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1e",
							word: "Word 3",
							meaning: "Meaning 3",
							Image: "Image URL 3",
							use_case: "Usage 3",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1f",
							word: "Word 4",
							meaning: "Meaning 4",
							Image: "Image URL 4",
							use_case: "Usage 4",
						},
					],
				},
			],
			profession: "PROFESSION_NOT_SET",
			topics: ["Technology", "English"],
			examAspirant: true,
			premiumUser: false,
			_id: "652e8183c454ec33e4a98541",
			name: "User4",
			status: "Paid",
			contact: "7798121777",
			password: "$2a$10$NlmK5EO04L/cF74kG9ailupzXwnCebPSCBHR9B9CJ5FAMHRUsJUha",
			level_of_english: "L1",
			createdAt: "2023-10-17T12:43:47.972Z",
			updatedAt: "2023-10-17T14:00:09.365Z",
			__v: 1,
			action: "Edit",
		},
		{
			email: "audu1@email.com",
			city: "city_not_set",
			college: "college_not_set",
			dob: "dob_not_set",
			gender: "gender_not_set",
			interest: ["INTEREST_NOT_SET"],
			walletMoney: 500,
			address: "address_not_set",
			profileImage:
				"https://i.pinimg.com/564x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
			points: 40,
			favoriteWords: [],
			wordCategories: [
				{
					name: "Category 1",
					totalWords: 10,
					likes: 5,
					isPremium: false,
					tags: ["English", "Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1b",
							word: "Word 1",
							meaning: "Meaning 1",
							Image: "Image URL 1",
							use_case: "Usage 1",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1c",
							word: "Word 2",
							meaning: "Meaning 2",
							Image: "Image URL 2",
							use_case: "Usage 2",
						},
					],
				},
				{
					name: "Category 2",
					totalWords: 15,
					likes: 8,
					isPremium: true,
					tags: ["English", "Advanced Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1e",
							word: "Word 3",
							meaning: "Meaning 3",
							Image: "Image URL 3",
							use_case: "Usage 3",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1f",
							word: "Word 4",
							meaning: "Meaning 4",
							Image: "Image URL 4",
							use_case: "Usage 4",
						},
					],
				},
			],
			profession: "PROFESSION_NOT_SET",
			topics: ["Technology", "English"],
			examAspirant: true,
			premiumUser: false,
			_id: "652e8183c454ec33e4a98541",
			name: "User3",
			status: "Paid",
			contact: "7798121777",
			password: "$2a$10$NlmK5EO04L/cF74kG9ailupzXwnCebPSCBHR9B9CJ5FAMHRUsJUha",
			level_of_english: "L1",
			createdAt: "2023-10-17T12:43:47.972Z",
			updatedAt: "2023-10-17T14:00:09.365Z",
			__v: 1,
			action: "Edit",
		},
		{
			email: "audu1@email.com",
			city: "city_not_set",
			college: "college_not_set",
			dob: "dob_not_set",
			gender: "gender_not_set",
			interest: ["INTEREST_NOT_SET"],
			walletMoney: 500,
			address: "address_not_set",
			profileImage:
				"https://i.pinimg.com/564x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
			points: 40,
			favoriteWords: [],
			wordCategories: [
				{
					name: "Category 1",
					totalWords: 10,
					likes: 5,
					isPremium: false,
					tags: ["English", "Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1b",
							word: "Word 1",
							meaning: "Meaning 1",
							Image: "Image URL 1",
							use_case: "Usage 1",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1c",
							word: "Word 2",
							meaning: "Meaning 2",
							Image: "Image URL 2",
							use_case: "Usage 2",
						},
					],
				},
				{
					name: "Category 2",
					totalWords: 15,
					likes: 8,
					isPremium: true,
					tags: ["English", "Advanced Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1e",
							word: "Word 3",
							meaning: "Meaning 3",
							Image: "Image URL 3",
							use_case: "Usage 3",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1f",
							word: "Word 4",
							meaning: "Meaning 4",
							Image: "Image URL 4",
							use_case: "Usage 4",
						},
					],
				},
			],
			profession: "PROFESSION_NOT_SET",
			topics: ["Technology", "English"],
			examAspirant: true,
			premiumUser: false,
			_id: "652e8183c454ec33e4a98541",
			name: "User10",
			status: "Unpaid",
			contact: "7798121777",
			password: "$2a$10$NlmK5EO04L/cF74kG9ailupzXwnCebPSCBHR9B9CJ5FAMHRUsJUha",
			level_of_english: "L1",
			createdAt: "2023-10-17T12:43:47.972Z",
			updatedAt: "2023-10-17T14:00:09.365Z",
			__v: 1,
			action: "Edit",
		},
		{
			email: "audu1@email.com",
			city: "city_not_set",
			college: "college_not_set",
			dob: "dob_not_set",
			gender: "gender_not_set",
			interest: ["INTEREST_NOT_SET"],
			walletMoney: 500,
			address: "address_not_set",
			profileImage:
				"https://i.pinimg.com/564x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
			points: 40,
			favoriteWords: [],
			wordCategories: [
				{
					name: "Category 1",
					totalWords: 10,
					likes: 5,
					isPremium: false,
					tags: ["English", "Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1b",
							word: "Word 1",
							meaning: "Meaning 1",
							Image: "Image URL 1",
							use_case: "Usage 1",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1c",
							word: "Word 2",
							meaning: "Meaning 2",
							Image: "Image URL 2",
							use_case: "Usage 2",
						},
					],
				},
				{
					name: "Category 2",
					totalWords: 15,
					likes: 8,
					isPremium: true,
					tags: ["English", "Advanced Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1e",
							word: "Word 3",
							meaning: "Meaning 3",
							Image: "Image URL 3",
							use_case: "Usage 3",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1f",
							word: "Word 4",
							meaning: "Meaning 4",
							Image: "Image URL 4",
							use_case: "Usage 4",
						},
					],
				},
			],
			profession: "PROFESSION_NOT_SET",
			topics: ["Technology", "English"],
			examAspirant: true,
			premiumUser: false,
			_id: "652e8183c454ec33e4a98541",
			name: "User8",
			status: "UnPaid",
			contact: "7798121777",
			password: "$2a$10$NlmK5EO04L/cF74kG9ailupzXwnCebPSCBHR9B9CJ5FAMHRUsJUha",
			level_of_english: "L1",
			createdAt: "2023-10-17T12:43:47.972Z",
			updatedAt: "2023-10-17T14:00:09.365Z",
			__v: 1,
			action: "Edit",
		},
		{
			email: "audu1@email.com",
			city: "city_not_set",
			college: "college_not_set",
			dob: "dob_not_set",
			gender: "gender_not_set",
			interest: ["INTEREST_NOT_SET"],
			walletMoney: 500,
			address: "address_not_set",
			profileImage:
				"https://i.pinimg.com/564x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
			points: 40,
			favoriteWords: [],
			wordCategories: [
				{
					name: "Category 1",
					totalWords: 10,
					likes: 5,
					isPremium: false,
					tags: ["English", "Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1b",
							word: "Word 1",
							meaning: "Meaning 1",
							Image: "Image URL 1",
							use_case: "Usage 1",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1c",
							word: "Word 2",
							meaning: "Meaning 2",
							Image: "Image URL 2",
							use_case: "Usage 2",
						},
					],
				},
				{
					name: "Category 2",
					totalWords: 15,
					likes: 8,
					isPremium: true,
					tags: ["English", "Advanced Vocabulary"],
					wordsList: [
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1e",
							word: "Word 3",
							meaning: "Meaning 3",
							Image: "Image URL 3",
							use_case: "Usage 3",
						},
						{
							isKnown: "unknown",
							_id: "652e06d08a913003acdc2e1f",
							word: "Word 4",
							meaning: "Meaning 4",
							Image: "Image URL 4",
							use_case: "Usage 4",
						},
					],
				},
			],
			profession: "PROFESSION_NOT_SET",
			topics: ["Technology", "English"],
			examAspirant: true,
			premiumUser: false,
			_id: "652e8183c454ec33e4a98541",
			name: "User6",
			status: "paid",
			contact: "7798121777",
			password: "$2a$10$NlmK5EO04L/cF74kG9ailupzXwnCebPSCBHR9B9CJ5FAMHRUsJUha",
			level_of_english: "L1",
			createdAt: "2023-10-17T12:43:47.972Z",
			updatedAt: "2023-10-17T14:00:09.365Z",
			__v: 1,
			action: "Edit",
		},
	]);
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	////////////Fetching users////////////////////////////

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
		},
		{
			title: "Conatact No",
			dataIndex: "contact",
			key: "contact",
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: (text) => (
				<div
					style={{
						fontWeight: "600",
						color: text.toLowerCase() === "paid" ? "green" : "red",
					}}
				>
					{text}
				</div>
			),
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
						handelEdit(record);
					}}
				>
					{text}
				</Button>
			),
		},
	];

	//////////////////////////////////////////////////////
	////////////////Function to toggle Content//////////////////////
	const handleMenuItemClick = (item) => {
		setElementKey(item.key);
	};
	///////////////////////////////////////////////////////////////
	return (
		<Layout
			style={{
				minHeight: "100vh",
			}}
		>
			<Sidebar
				collapsed={collapsed}
				setCollapsed={setCollapsed}
				handleMenuItemClick={handleMenuItemClick}
			/>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				/>
				<Content
					style={{
						margin: "0 16px",
					}}
				>
					<Breadcrumb
						style={{
							margin: "16px 0",
						}}
					></Breadcrumb>
					<div
						style={{
							padding: 24,
							minHeight: "100%",
							background: colorBgContainer,
						}}
					>
						{elementKey == 10 ? (
							<TableComponent columns={columns} dataSource={dataSource} />
						) : (
							""
						)}
					</div>
					{/* Drawer Component */}
					<DrawerComponent
						open={open}
						setOpen={setOpen}
						onClose={onClose}
						editData={editData}
						setDataSource={setDataSource}
					/>
					;
				</Content>
				<Footer
					style={{
						textAlign: "center",
					}}
				></Footer>
			</Layout>
		</Layout>
	);
};
export default App;
