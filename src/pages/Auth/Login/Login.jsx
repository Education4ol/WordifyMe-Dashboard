import "./Login.css";
import React from "react";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
const Login = () => {
	return (
		<>
			<div className="login-container-wrapper">
				<div className="login-container">
					<Input
						size="large"
						placeholder="large size"
						prefix={<UserOutlined />}
					/>
					<Input
						size="large"
						placeholder="large size"
						prefix={<LockOutlined />}
						type="password"
					/>
				</div>
			</div>
		</>
	);
};

export default Login;
