import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";


function App() {
	return (
		<Router>
			<Navbar />
      <Sidebar />
      <Content />
		</Router>
	);
}

export default App;
