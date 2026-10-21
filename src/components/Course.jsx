import { use, useState, useTransition } from "react";
function Course({ name, price, imgSrc }) {
	const [count, setCount] = useState(0);
	const [open, setOpen] = useState(false);

	function handleOpen() {
		setOpen(!open);
	}

	// const result = 0 ? 1000 + 1999 : count + 1000;
	// console.log(result);
	// console.log(count);

	console.log(open);
	function handleClick() {
		setCount(count + 1);
	}
	return (
		<article>
			<h1>{count}</h1>
			<button onClick={handleClick}>click me</button>
			<br />
			<button onClick={handleOpen}>change open</button>
			{open && <h1>Hello when open is true</h1>}
		</article>
	);
}
export default Course;
