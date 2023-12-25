import React, { useEffect, useState } from "react";

import { Button, Input } from "antd";
import axios from "axios";

const UserFeedback = () => {
	//UseStates for UserFeedback
	const [searched, setSearched] = useState("");
	const [feedbackData, setFeedBackData] = useState("");
	//End of UseStates

	useEffect(() => {
		const getUserFeedback = async () => {
			const feedback = await axios.get(
				`${import.meta.env.VITE_BASE_URL}/userfeedback/`
			);

			setFeedBackData(feedback.data.data);
		};
		getUserFeedback();
	}, []);

	return (
		<>
			<div className="user-feedback-wrapper">
				<Input
					type="text"
					onChange={(e) => {
						setSearched(e.target.value);
					}}
					placeholder="Search Here....."
				/>
				{feedbackData &&
					feedbackData
						.filter((item) => {
							return searched.toLowerCase() == ""
								? item
								: item.first_name
										.toLowerCase()
										.includes(searched.toLowerCase());
						})
						.map((item, index) => {
							return (
								<UserFeedbackCard
									key={index}
									image={item.image}
									name={item.name}
									message={item.message}
									date={item.date}
									time={item.time}
								/>
							);
						})}
			</div>
		</>
	);
};

export default UserFeedback;

const UserFeedbackCard = (props) => {
	return (
		<>
			<div className="user-feedback-card-wrapper">
				<div className="user-feedback-card-icon">
					<img src={props.image} alt="icon" />
				</div>

				<div className="user-feedback-card-content">
					<span>{props.name}</span>
					<div className="user-feedback-card-content-date-time">
						<span>{props.time}</span>
						&nbsp; | &nbsp;
						<span>{props.date}</span>
					</div>
					<div className="user-feedback-card-content-messege">
						<span>{props.message}</span>
					</div>

					<div className="user-feedback-card-buttons">
						<Button type="text">User Details </Button>
						<Button type="text">Reply</Button>
					</div>
				</div>
			</div>
		</>
	);
};
