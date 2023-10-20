import { Drawer, Space, Button, Input } from "antd";
import React, { useState } from "react";
import data from "../assets/data";
const DrawerComponent = (props) => {
	const [name, setName] = useState("");
	const [contact, setContact] = useState("");
	const [status, setStatus] = useState("");
	const { editData } = props;

	const handleSave = () => {
		const editedData = data.find(({ _id }) => _id == editData._id);
		const index = data.indexOf(editedData);
		const newData = {
			...data[0],
			name,
			contact,
			status,
			key: index,
		};
		console.log("index : ", index);
		data.splice(index, 1, newData);
		console.log("New Data", data);
	};

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
				<label htmlFor="name"> Name</label>
				<Input
					placeholder={editData.name}
					id="name"
					name="name"
					onKeyUp={(e) => {
						setName(e.target.value);
					}}
				/>
				<label htmlFor="contact"> Contact</label>
				<Input
					placeholder={editData.contact}
					id="contact"
					name="contact"
					onKeyUp={(e) => {
						setContact(e.target.value);
					}}
				/>
				<label htmlFor="status">Status</label>
				<Input
					placeholder={editData.status}
					id="status"
					name="status"
					onKeyUp={(e) => {
						setStatus(e.target.value);
					}}
				/>
				<Button onClick={handleSave}>Save</Button>
			</Drawer>
		</div>
	);
};

export default DrawerComponent;
