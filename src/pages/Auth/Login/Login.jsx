import "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
	const [contact, setContact] = useState("");
	const [password, setPassword] = useState("");
	const handleLogin = () => {
		const data = axios.post("http://localhost:8082/v1/auth/login", {
			contact,
			password,
		});
		console.log(data);
	};
	return (
		<>
			<div className="login-container-wrapper">
				<div className="login-container">
					<div className="login-heading-sub-heading">
						<h1>Login </h1>
						<p>Please enter your login details to Sign In</p>
					</div>

					<div className="login-inputs">
						<Input
							className="login-input"
							size="large"
							placeholder="Email Address"
							prefix={<UserOutlined />}
							type="email"
							onKeyUp={(e) => {
								setContact(e.target.value);
							}}
						/>
						<Input
							className="login-input"
							size="large"
							placeholder="Password"
							prefix={<LockOutlined />}
							type="password"
							onKeyUp={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					<div className="checkbox-container">
						<div>
							<input value="test" type="checkbox" name="remember" />
							&nbsp; <label htmlFor="remember">Keep me logged In</label>
						</div>
						<div>
							<Link to="/">Forgot Password?</Link>
						</div>
					</div>
					<div className="login-button-wrapper">
						<button className="login-button" onClick={handleLogin}>
							Log in
						</button>
					</div>
					<div className="signup-link-wrapper">
						<p>
							Do You Have an Account?&nbsp; <Link to="/signup">Sign Up</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
