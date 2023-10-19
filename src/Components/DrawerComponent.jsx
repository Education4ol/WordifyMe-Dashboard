import { Drawer, Space, Button } from "antd";
import React from "react";

const DrawerComponent = (props) => {
	return (
		<div>
			<Drawer
				title="Edit Details"
				placement="right"
				size="large"
				onClose={props.onClose}
				open={props.open}
				extra={
					<Space>
						<Button onClick={props.onClose}>Cancel</Button>
						<Button type="primary" onClick={props.onClose}>
							OK
						</Button>
					</Space>
				}
			>
				<p>Some contents...</p>
				<p>{props.editData.email}</p>
				<p>{props.editData.name}</p>
				<p>{props.editData.contact}</p>
				<p>Some contents...</p>
			</Drawer>
		</div>
	);
};

export default DrawerComponent;
