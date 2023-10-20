import React from "react";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
	LogoutOutlined,
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
