import "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { notification, Space, Button } from "antd";

const Login = ({ auth, setAuth }) => {
	const [contact, setContact] = useState("");
	const [password, setPassword] = useState("");
	const [api, contextHolder] = notification.useNotification();
	const [loadings, setLoadings] = useState([]);
	const navigate = useNavigate();

	//////Redirect Function///////////////
	const redirect = () => {
		setTimeout(() => {
			return navigate("/v1/profile");
		}, 2000);
	};
	/////////////////////////////////////

	////Login Button Handeling//////////////////////////////////////
	const handleLogin = async () => {
		enterLoading(0);
		const res = await axios
			.post(
				"https://wordifyme-dashboard-backend-production.up.railway.app/v1/auth/login",
				{
					contact,
					password,
				}
			)
			.catch(function (error) {
				console.log(error);
				openNotification("error", error.response.data.message);
			});
		if (res) {
			openNotification("success");
			redirect();
			setAuth(true);
		}
	};
	////////////////////////////////////////////////////////////////////////////

	////Loading after login button pressed////////
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
	/////////////////////////////////////////////

	////Handeling Notifications////////
	const openNotification = (type, message) => {
		if (type === "error") {
			api[type]({
				message: "Error",
				description: message,

				duration: 3,
			});
		} else {
			api[type]({
				message: "Success",
				description: "User Logged In Successfully",

				duration: 3,
			});
		}
	};
	////////////////////////////////////
	return (
		<>
			{contextHolder}
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
							placeholder="Mobile Number"
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
							&nbsp;{" "}
							<label htmlFor="remember" id="remember">
								Keep me logged In
							</label>
						</div>
						<div>
							<Link to="/">Forgot Password?</Link>
						</div>
					</div>
					<div className="login-button-wrapper">
						<Button
							className="login-button"
							loading={loadings[0]}
							onClick={handleLogin}
						>
							Log in
						</Button>
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
