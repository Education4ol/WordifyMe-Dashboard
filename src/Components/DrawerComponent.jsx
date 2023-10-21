import { Drawer, Space, Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import data from "../assets/data";
import { notification } from "antd";
const DrawerComponent = (props) => {
	const [name, setName] = useState("");
	const [contact, setContact] = useState("");
	const [status, setStatus] = useState("");
	const [api, contextHolder] = notification.useNotification();
	const { editData, dataSource, setDataSource } = props;
	////////////Notification///////////////////////////////
	const openNotification = (type, message) => {
		api[type]({
			message: "Success",
			description: message,
			duration: 3,
		});
	};

	///////////////////User Updating/////////////////////////

	const handleSave = () => {
		const editedData = data.find(({ _id }) => _id == editData._id);
		const index = data.indexOf(editedData);
		const newData = {
			...data[0],
			name,
			contact,
			status,
		};
		props.setEditData("");
		data.splice(index, 1, newData);
		const UpdatedData = data;
		setDataSource(UpdatedData);
		openNotification("success", "User Updated Successfully");
		setName("");
		setStatus("");
		setContact("");
	};

	return (
		<>
			{contextHolder}
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
				<div className="drawer-content-wrapper">
					<div className="drawer-content-edit">
						<label htmlFor="name"> Name</label>
						<Input
							placeholder={editData.name}
							id="name"
							name="name"
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</div>
					<div className="drawer-content-edit">
						<label htmlFor="contact"> Contact</label>
						<Input
							placeholder={editData.contact}
							id="contact"
							name="contact"
							onChange={(e) => {
								setContact(e.target.value);
							}}
						/>
					</div>
					<div className="drawer-content-edit">
						<label htmlFor="status">Status</label>
						<Input
							placeholder={editData.status}
							id="status"
							name="status"
							onKeyUp={(e) => {
								setStatus(e.target.value);
							}}
						/>
					</div>
					<div className="drawer-content-edit-button">
						<Button type="primary" onClick={handleSave}>
							Save
						</Button>
					</div>
				</div>
			</Drawer>
		</>
	);
};

export default DrawerComponent;
