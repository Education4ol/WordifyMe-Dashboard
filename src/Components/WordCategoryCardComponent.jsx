import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
const WordCategoryCardComponent = (props) => {
	const { wordlist } = props;
	return (
		<>
			<div className="word-category-card-wrapper">
				<div className="word-category-card-icon">
					<img src={props.icon} alt="icon" />
				</div>
				<div className="word-category-card-content">
					<span>{props.name}</span>

					<div className="word-category-card-word-count">
						<span>{`${wordlist.length} words`}</span>
						<Button shape="circle">
							<ArrowRightOutlined style={{ color: "white" }} />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default WordCategoryCardComponent;
