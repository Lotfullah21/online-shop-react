import heroImg from "../assets/hero.png";

function Hero() {
	return (
		<section className="bg-blue-50 px-4 py-16">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
				<div className="flex-1 text-center md:text-left">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Learn new skills online
					</h1>
					<p className="text-gray-600 mb-6">
						Find the best courses in programming, design and more. Start
						learning today at your own pace.
					</p>
					<button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
						Browse courses
					</button>
				</div>
				<div className="flex-1">
					<img src={heroImg} alt="Hero" className="w-full rounded-lg" />
				</div>
			</div>
		</section>
	);
}

export default Hero;
