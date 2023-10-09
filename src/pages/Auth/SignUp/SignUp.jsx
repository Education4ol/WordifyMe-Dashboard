import React, { useState } from "react";
import "./SignUp.css";
import { Input } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { notification, Space, Button } from "antd";

const SignUp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [contact, setContact] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");
	const [api, contextHolder] = notification.useNotification();
	const [loadings, setLoadings] = useState([]);
	const openNotification = (type) => {
		if (type === "error") {
			api[type]({
				message: "Error",
				description: "Passwords do not match",

				duration: 3,
			});
		} else {
			api[type]({
				message: "Sucess",
				description: "User Registered Successfully",

				duration: 3,
			});
		}
	};

	const handleSignUp = () => {
		if (password === confirmPass) {
			const data = axios.post("http://localhost:8082/v1/auth/register", {
				name,
				email,
				contact,
				password,
			});
			openNotification("success");
		} else {
			openNotification("error");
		}
	};

	const enterLoading = (index) => {
		setLoadings((prevLoadings) => {
			const newLoadings = [...prevLoadings];
			newLoadings[index] = true;
			return newLoadings;
		});
		setTimeout(() => {
			setLoadings((prevLoadings) => {
				const newLoadings = [...prevLoadings];
				newLoadings[index] = false;
				return newLoadings;
			});
		}, 6000);
	};

	return (
		<>
			{contextHolder}
			<div className="signup-container-wrapper">
				<div className="signup-container">
					<div className="signup-heading-sub-heading">
						<h1>Sign Up</h1>
						<p>Create your account in seconds</p>
					</div>

					<div className="signup-inputs">
						<Input
							className="signup-input"
							size="large"
							placeholder="Name"
							type="text"
							onKeyUp={(e) => {
								setName(e.target.value);
							}}
						/>
						<Input
							className="signup-input"
							size="large"
							placeholder="Email Address"
							type="email"
							onKeyUp={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<Input
							className="signup-input"
							size="large"
							placeholder="Mobile No"
							onKeyUp={(e) => {
								setContact(e.target.value);
							}}
						/>

						<Input
							className="signup-input"
							size="large"
							placeholder="Password"
							type="email"
							onKeyUp={(e) => {
								setPassword(e.target.value);
							}}
						/>

						<Input
							className="signup-input"
							size="large"
							placeholder="Retype Password"
							type="email"
							onKeyUp={(e) => {
								setConfirmPass(e.target.value);
							}}
						/>
					</div>
					<div className="checkbox-container">
						<div>
							<input value="test" type="checkbox" name="remember" />
							&nbsp;{" "}
							<label htmlFor="remember">
								I agree to the Terms of service and Privacy Policy
							</label>
						</div>
					</div>
					<div className="signup-button-wrapper">
						<Button
							className="signup-button"
							loading={loadings[0]}
							onClick={() => {
								enterLoading(0);
								handleSignUp;
							}}
						>
							Create an account
						</Button>
					</div>
					<div className="login-link-wrapper">
						<p>
							Already a member?&nbsp; <Link>Log In</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
