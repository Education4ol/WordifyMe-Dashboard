import React, { useState } from "react";
import { Button, Modal } from "antd";
import img from "../assets/modal-icon.jpg";

import DrawerComp from "./Drawer.Component";
import EditWordCategory from "./EditWordCategory";
const ModalComponent = (props) => {
	const [openDrawer, setOpenDrawer] = useState(false);

	return (
		<>
			<Modal
				title={props.name}
				open={props.isModalOpen}
				onOk={props.handleOk}
				onCancel={props.handleCancel}
				footer={[
					<Button onClick={() => setOpenDrawer(true)}>Edit Category</Button>,
					<Button onClick={() => props.onDelete(props.item._id)}>
						Delete Category
					</Button>,
				]}
			>
				<div className="modal-content-wrapper">
					<div className="modal-category-icon">
						<img src={img} alt="icon" />
					</div>
					<div className="word-category-info-wrapper">
						<div className="word-category-info-left">
							<p>Total Words : {props.item.totalWords}</p>

							<p>Premium : {props.item.isPremium ? "True" : "False"}</p>
							<p>WordsList : </p>
						</div>
						<div className="word-category-info-right" style={{ width: "50%" }}>
							<p>Likes : {props.item.likes}</p>
							<p>Tags : {props.item.tags.join(" , ")}</p>
							<p>Completed : {props.item.isCompleted ? "True" : "False"}</p>
						</div>
					</div>
					<div className="words-list-wrapper">
						{props.item.wordsList.map((word) => {
							return (
								<div className="words-list">
									<div className="words-list-img">
										<img src={word.Image} alt="word image" />
									</div>
									<div className="words-list-details">
										<p>Word : {word.word}</p>
										<p>is Known : {word.isKnown}</p>
										<p>Meaning : {word.meaning}</p>
										<p>Use Case : {word.use_case}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</Modal>

			<DrawerComp
				openDrawer={openDrawer}
				setOpenDrawer={setOpenDrawer}
				title="Edit Category"
			>
				<EditWordCategory
					category={props.item}
					UpdateCategory={props.UpdateCategory}
					setUpdateCategory={props.setUpdateCategory}
					onSaveEdit={props.onSaveEdit}
				/>
			</DrawerComp>
		</>
	);
};
export default ModalComponent;
