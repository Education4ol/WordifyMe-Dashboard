import React from "react";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import {
	TeamOutlined,
	UserOutlined,
	LogoutOutlined,
	BellOutlined,
	FileWordOutlined,
	MessageOutlined,
	HomeOutlined,
} from "@ant-design/icons";
import MenuComponent from "./MenuComponent";
const Sidebar = (props) => {
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
		getItem("Home", "1", <HomeOutlined />),
		getItem("Notifications", "sub2", <BellOutlined />, [
			getItem("Push", "2"),
			getItem("Whatsapp", "3"),
			getItem("Email", "4"),
		]),
		getItem("Users", "5", <UserOutlined />),
		getItem("Word Category", "6", <FileWordOutlined />),
		getItem("User Feedback", "7", <MessageOutlined />),
	];
	return (
		<>
			<Sider
				collapsible
				collapsed={props.collapsed}
				onCollapse={(value) => props.setCollapsed(value)}
				className="layout-sider"
				style={{ background: "#2c0547" }} // Change the background color here
			>
				{props.collapsed ? (
					<div>
						<h1 style={{ color: "white", textAlign: "center", paddingTop: 20 }}>
							W
						</h1>
					</div>
				) : (
					<div>
						<h1 style={{ color: "white", textAlign: "center", paddingTop: 20 }}>
							WordifyMe
						</h1>
					</div>
				)}
				<div className="menu-wrapper" style={{ marginTop: 40 }}>
					<MenuComponent
						defaultSelectedKeys={["1"]}
						style={{ background: "#2c0547" }}
						mode="inline"
						items={items}
						theme="dark"
						onSelect={props.handleMenuItemClick}
					/>
				</div>
			</Sider>
		</>
	);
};

export default Sidebar;
