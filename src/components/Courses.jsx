import React from "react";
import Course from "./Course";
import Ipad from "../assets/python.jpeg";
import Js from "../assets/js.png";

function Courses() {
	return (
		<section className="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:bg-red-400  md:grid-cols-3 md:bg-purple-500">
			<Course name="Machine learning" price="20" imgSrc={Ipad} />
			{/* <Course name="Java Script" price="40" imgSrc={Js} />
			<Course name="Java Script" price="40" imgSrc={Js} />
			<Course name="Java Script" price="40" imgSrc={Js} />
			<Course name="Java Script" price="40" imgSrc={Js} /> */}
		</section>
	);
}
export default Courses;
