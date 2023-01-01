import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase();

	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? "text-yellow" : ""
			} hover:text-yellow transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage }) => {
	//Represents when we are on mobile screen
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-red";

	return (
		<nav className={`z-40 w-full fixed top-0 py-6 ${navbarBackground}`}>
			<div className="flex items-center justify-between mx-auto w-5/6">
				<h4 className="font-playfair text-3xl font-bold">AB</h4>

				{/* Desktop Nav */}
				{isAboveSmallScreens ? (
					<div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
						<Link
							page="Home"
							setSelectedPage={setSelectedPage}
							selectedPage={selectedPage}
						/>

						<Link
							page="Skills"
							setSelectedPage={setSelectedPage}
							selectedPage={selectedPage}
						/>

						<Link
							page="Projects"
							setSelectedPage={setSelectedPage}
							selectedPage={selectedPage}
						/>

						<Link
							page="Testimonials"
							setSelectedPage={setSelectedPage}
							selectedPage={selectedPage}
						/>

						<Link
							page="Contact"
							setSelectedPage={setSelectedPage}
							selectedPage={selectedPage}
						/>
					</div>
				) : (
					<button
						className="rounded-full bg-red p-2"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						<img alt="menu-icon" src="../assets/menu-icon.svg" />
					</button>
				)}

				{/* Mobile Menu Popup */}
				{!isAboveSmallScreens && isMenuToggled && (
					<div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
						{/* Close Icon */}
						<div className="flex justify-end p-12">
							<button
								onClick={() => setIsMenuToggled(!isMenuToggled)}
							>
								<img
									alt="menu-close-icon"
									src="../assets/close-icon.svg"
								/>
							</button>
						</div>

						{/* Menu Items */}
						<div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                        <Link
							page="Home"
							setSelectedPage={setSelectedPage}
							selectedPage={selectedPage}
						/>

						<Link
							page="Skills"
							setSelectedPage={setSelectedPage}
							selectedPage={selectedPage}
						/>

						<Link
							page="Projects"
							setSelectedPage={setSelectedPage}
							selectedPage={selectedPage}
						/>

						<Link
							page="Testimonials"
							setSelectedPage={setSelectedPage}
							selectedPage={selectedPage}
						/>

						<Link
							page="Contact"
							setSelectedPage={setSelectedPage}
							selectedPage={selectedPage}
						/>
                        </div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
