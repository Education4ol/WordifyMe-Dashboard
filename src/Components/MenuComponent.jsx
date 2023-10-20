import React from "react";
import { Menu } from "antd";
const MenuComponent = (props) => {
	return (
		<>
			<Menu
				defaultSelectedKeys={["1"]}
				style={{ background: "#2c0547" }}
				mode="inline"
				items={props.items}
				theme="dark"
				onSelect={props.onSelect}
			></Menu>
		</>
	);
};

export default MenuComponent;
