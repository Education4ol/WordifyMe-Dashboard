import Login from "../../pages/Auth/Login/Login";
import SignUp from "../../pages/Auth/SignUp/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Profile from "../../pages/Profile/Profile";

const createRoutes = () => {
	const [auth, setAuth] = useState(false);

	return (
		<Routes>
			<Route
				exact
				path="/v1/login"
				element={<Login auth={auth} setAuth={setAuth} />}
			/>
			<Route
				exact
				path="/v1/signup"
				element={<SignUp auth={auth} setAuth={setAuth} />}
			/>
			<Route
				path="/v1/profile"
				// element={
				// 	<ProtectedRoute auth={auth}>
				// 		<Profile setAuth={setAuth}/>
				// 	</ProtectedRoute>
				// }
				element={<Profile />}
			/>
		</Routes>
	);
};

export const ProtectedRoute = ({ auth, children }) => {
	if (auth) {
		return children;
	} else {
		return <Navigate to="/v1/login" />;
	}
};

export default createRoutes;
