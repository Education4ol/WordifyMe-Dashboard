import React, { useState } from "react";
import "./SignUp.css";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();
	////////////Redirect Function///////////////
	const redirect = () => {
		setTimeout(() => {
			return navigate("/v1/profile");
		}, 4000);
	};
	///////////////////////////////////////////

	//////Handling Notifications////////////////
	const openNotification = (type, message) => {
		if (type === "error") {
			api[type]({
				message: "Error",
				description: `${message}`,

				duration: 3,
			});
		}
		if (type === "warning") {
			api[type]({
				message: "Warning",
				description: message,

				duration: 3,
			});
		}
	};
	////////////////////////////////////////////

	//////Handling Signup Button/////////
	const handleSignUp = async () => {
		enterLoading(0);
		if (password === confirmPass) {
			const data = await axios
				.post(
					"https://wordifyme-dashboard-backend-production.up.railway.app/v1/auth/register",
					{
						name,
						email,
						contact,
						password,
					}
				)
				.catch(function (error) {
					openNotification("error", `${error.response.data.message}`);
				});
			if (data) {
				console.log(data.data.statusCode);

				if (data.data.statusCode === 201) {
					openNotification("success", `${data.message}`);
					redirect();
				} else {
					openNotification("warning", `${data.data.message}`);
				}
			}
		} else {
			openNotification("error", "Passwords do not match");
		}
	};
	///////////////////////////////////////////////////////

	/////Loading after button is Clicked//////////////////////
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
		}, 4000);
	};
	////////////////////////////////////////////////
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
							onClick={handleSignUp}
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
