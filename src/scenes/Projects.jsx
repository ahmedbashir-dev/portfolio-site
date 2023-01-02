import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { strings } from "../res/strings";

const Projects = ({ language }) => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
	const _str = strings[language];
	return (
		<section id="projects">
			{/* Headings */}
			<motion.div
				className="md:w-2/5 mx-auto text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div>
					<p className="font-playfair font-semibold text-4xl">
						<span className="text-red">PRO</span>JECTS
					</p>
					<div className="flex justify-center mt-5">
						<LineGradient width="w-1/3" />
					</div>
				</div>
				<p className="mt-10 mb-10">{_str["projects"]}</p>
			</motion.div>

			{/* Projects */}
			<div className="flex justify-center">
				<motion.div
					className="sm:grid sm:grid-cols-3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: -50 },
						visible: { opacity: 1, y: 0 },
					}}
				></motion.div>
			</div>
		</section>
	);
};

export default Projects;
