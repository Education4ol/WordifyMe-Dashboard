import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/sidebarComponent"; // Import the Sidebar component
import data from "../../assets/data";
import "./Profile.css";

import { Breadcrumb, Layout, Menu, theme, Button, Input } from "antd";

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
	const [searched, setSearched] = useState("");
	const [dataSource, setDataSource] = useState(data);

	const onClose = () => {
		setOpen(false);
	};

	const handelEdit = (record) => {
		setEditData(record);
		setOpen(true);
	};
	/////////////////////////////////////////////////////

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
			filteredValue: [searched],
			onFilter: (value, record) => {
				return (
					String(record.name).toLowerCase().includes(value.toLowerCase()) ||
					String(record.contact).toLowerCase().includes(value.toLowerCase()) ||
					String(record.status).toLowerCase().includes(value.toLowerCase())
				);
			},
			shouldCellUpdate: (prevRecord, nextRecord) =>
				prevRecord.name !== nextRecord.name,
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
							<div>
								<Input
									placeholder="Search Here....."
									onChange={(e) => {
										setSearched(e.target.value);
									}}
									style={{ width: "50%", marginBottom: 10 }}
								/>
								<TableComponent columns={columns} dataSource={dataSource} />
							</div>
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
						setEditData={setEditData}
						dataSource={dataSource}
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
