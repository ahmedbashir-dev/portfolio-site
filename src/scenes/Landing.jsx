import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

	return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            {/* Image section */}
            <div className="md:order-2 flex justify-center md:mt-32 basis-3/5">
                {isAboveMediumScreens ? (<div className="relative z-0 ml-20 
                before:absolute before:-top-8 before:-left-8 before:rounded-t-[400px] before:w-full before:max-w-[400px]  before:h-full before:border-2 before:border-blue before:z-[-1]">
                    <img alt="ahmed-bashir" className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full
                    max-w-[400px] md:max-w-[350px]"  src="../assets/profile-pic.png" />
                </div>) : (
                    <img alt="ahmed-bashir" className="hover:filter mt-8 hover:saturate-150 transition duration-500 z-10 w-full
                    max-w-[250px] md:max-w-[350px]"  src="../assets/profile-pic.png" />
                )}
                
            </div>
            {/* Main Section */}
            <div className="z-30 basis-2/5 mt-8 md:mt-32">
                    {/* Heading */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount:0.5}}
                        transition={{duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:-50},
                            visible:{opacity:1, x:0}
                        }}
                    >
                        <p className="text-6xl font-playfair z-10 text-center md:text-start">
                            Ahmed {""}
                            <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 
                            xs:before:content-brush before:absolute 
                            before:-left-[0.6em] before:-top-[2em] before:z-[-1]">
                                Bashir
                            </span>

                        </p>
                        <p className="mt-1 sm:mt-10 mb-7 text-sm text-center md:text-start">
Transforming ideas into reality with cutting-edge engineering
                        </p>
                    </motion.div>

                    {/* Call to actions */}
                    <motion.div
                       className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount:0.5}}
                        transition={{delay:0.2, duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:-50},
                            visible:{opacity:1, x:0}
                        }}
                    >

                    </motion.div>
            </div>
        </section>
    )
};

export default Landing;
