import "./App.css";

import createRoutes from "./Routes/v1/Routes";
function App() {
	const routes = createRoutes();
	return <>{routes}</>;
}

export default App;
