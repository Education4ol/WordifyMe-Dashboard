import React, { useState } from "react";
import { Card, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

import DrawerComponent from "./DrawerComponent";
const UserCard = (props) => {
	const [open, setOpen] = useState(false);

	const handleEdit = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Card
				title={props.name}
				extra={
					<Button type="text" icon={<EditOutlined />} onClick={handleEdit}>
						Edit
					</Button>
				}
				style={{
					width: "100%",
				}}
			>
				<div className="card-content-wrapper">
					<div className="card-content-container">
						<p>Field 1 : {props.Field1}</p>
						<p>Field 2 : {props.Field2}</p>
						<p>Field 3 : {props.Field3}</p>
					</div>
					<div className="card-content-container">
						<p>Field 4 : {props.Field4}</p>
						<p>Field 5 : {props.Field5}</p>
						<p>Field 6 : {props.Field6}</p>
					</div>
				</div>
			</Card>
			<DrawerComponent
				open={open}
				setOpen={setOpen}
				onClose={onClose}
				name={props.name}
			/>
		</div>
	);
};

export default UserCard;
