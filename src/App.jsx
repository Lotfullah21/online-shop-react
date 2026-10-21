import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Courses from "./components/Courses";

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<div>
				<Navbar></Navbar>
			</div>
			<main className="flex-1">
				<Courses></Courses>
			</main>
			<footer>
				<Footer></Footer>
			</footer>
		</div>
	);
}

export default App;
