import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { strings } from "../res/strings";

const container = {
  hidden: {},
  visible:{
    transition:{ staggerChildren: 0.2}
  }
}

const projectVariant = {
  hidden: {opacity:0, scale: 0.8},
  visible: {opacity:1, scale: 1},
}

const Project = ({title, subtext, src, href}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 
  flex flex-col justify-center text-center items-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return(
    <motion.div
      variants={projectVariant}
      className="relative"
    >
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {subtext}
        </p>
        <img alt={projectTitle} src={src} />
      </div>
    </motion.div>
  )
}

const Projects = ({ language }) => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
	const _str = strings[language];
  
	return (
		<section id="projects" className="pt-96 pb-96">
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
					variants={container}
				>
          {/* Row 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" subtext={""}/>
        </motion.div>
			</div>
		</section>
	);
};

export default Projects;
