function Navbar() {
	return (
		<div className="flex justify-between px-2 py-4 bg-blue-100 my-4">
			<header>Amazon</header>
			<nav>
				<ul className="flex justify-evenly">
					<li>contact us</li>
					<li>about us</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
