import React, { useState } from "react";
import { ConfigProvider } from "antd";

import "./Profile.css";
import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
	LogoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import UserCard from "../../Components/UserCard";
const { Header, Content, Footer, Sider } = Layout;
///////////Menu Item //////////////////////////////////////
function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}
const items = [
	getItem("Option 1", "1", <PieChartOutlined />),
	getItem("Option 2", "2", <DesktopOutlined />),
	getItem("User", "sub1", <UserOutlined />, [
		getItem("Tom", "3"),
		getItem("Bill", "4"),
		getItem("Alex", "5"),
	]),
	getItem("Team", "sub2", <TeamOutlined />, [
		getItem("Team 1", "6"),
		getItem("Team 2", "8"),
	]),
	getItem("Files", "9", <FileOutlined />),
	getItem("Users", "10", <UserOutlined />),
];
///////////////////////////////////////////////////////
const App = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [elementKey, setElementKey] = useState("");
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	////////////Fetching users////////////////////////////
	const users = [
		{
			img: "",
			name: "Name 1",
			Field1: "field Content 1",
			Field2: "Field Content 2",
			Field3: "Field Content",
			Field4: "Field Content",
			Field5: "Field Content",
			Field6: "Field Content",
		},
		{
			img: "",
			name: "Name 2",
			Field1: "field Content 1",
			Field2: "Field Content 2",
			Field3: "Field Content",
			Field4: "Field Content",
			Field5: "Field Content",
			Field6: "Field Content",
		},
		{
			img: "",
			name: "Name 3",
			Field1: "field Content 1",
			Field2: "Field Content 2",
			Field3: "Field Content",
			Field4: "Field Content",
			Field5: "Field Content",
			Field6: "Field Content",
		},
		{
			img: "",
			name: "Name 4",
			Field1: "field Content 1",
			Field2: "Field Content 2",
			Field3: "Field Content",
			Field4: "Field Content",
			Field5: "Field Content",
			Field6: "Field Content",
		},
		{
			img: "",
			name: "Name 5",
			Field1: "field Content 1",
			Field2: "Field Content 2",
			Field3: "Field Content",
			Field4: "Field Content",
			Field5: "Field Content",
			Field6: "Field Content",
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
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
				className="layout-sider"
			>
				{collapsed ? (
					<div>
						<h1>L</h1>
					</div>
				) : (
					<div>
						<h1>Logo</h1>
					</div>
				)}
				<div className="menu-wrapper">
					<Menu
						defaultSelectedKeys={["1"]}
						mode="inline"
						items={items}
						theme="dark"
						onSelect={handleMenuItemClick}
					></Menu>
					<div className="logout-button-wrapper">
						<Button
							type="text"
							icon={<LogoutOutlined />}
							className="log-out-button"
						>
							Logout
						</Button>
					</div>
				</div>
			</Sider>
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
						<div className="user-cards-container">
							{elementKey == 10
								? users.map((user, index) => {
										return (
											<UserCard
												key={index}
												name={user.name}
												Field1={user.Field1}
												Field2={user.Field2}
												Field3={user.Field3}
												Field4={user.Field4}
												Field5={user.Field5}
												Field6={user.Field6}
											/>
										);
								  })
								: ""}
						</div>
					</div>
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
