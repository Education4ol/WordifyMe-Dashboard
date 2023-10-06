import "./App.css";
import Login from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</>
	);
}

export default App;
