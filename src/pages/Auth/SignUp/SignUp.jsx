import React, { useState } from "react";
import "./SignUp.css";
import { Input } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [contact, setContact] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");

	const handleSignUp = () => {
		if (password === confirmPass) {
			const data = axios.post("https://wordifyme-dashboard-backend-production.up.railway.app/v1/auth/register", {
				name,
				email,
				contact,
				password,
			});
			console.log(data);
		} else {
			alert("Passwords do not match");
		}
	};

	return (
		<>
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
						<button className="signup-button" onClick={handleSignUp}>
							Create an account
						</button>
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
