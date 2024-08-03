import "./css/layout.scss";
import Navbar from "./components/navbar/navbar.jsx";
import HomePage from "./routes/homePage/homePage.jsx";

function App() {
  return (
    <div className="layout">
		<div className="navbar">
			<Navbar/>
		</div>
		<div className="content">
			<HomePage/>
		</div>
	</div>
  )
}

export default App