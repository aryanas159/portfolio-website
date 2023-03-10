import React from "react";
import "./navbar.css";
import Logo from "../../assets/Logo.svg";
import { FiAlignRight } from "react-icons/fi";
const Links = () => {
	return (
		<div>
			<a href="#home" className="link">
				Home
			</a>
			<a href="#skills" className="link">
				Skills
			</a>
			<a href="#about" className="link">
				About me
			</a>
			<a href="#contact" className="link">
				Contact
			</a>
		</div>
	);
};
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)
	return (
		<div className="navbar">
			<div className="title">
				<img src={Logo} alt="logo" />
				<p className="nav__header">Portfolio</p>
			</div>
			<div className="links">
				<Links />
			</div>
			<div className="toggle-links" onClick={() => {setToggleMenu(prev => !prev)}}>
				<FiAlignRight className="hamburger-icon" />
			</div>
			{toggleMenu 
            ? 
            <div className="toggle-menu">
				<Links />
			</div>
            : 
            <></>}
		</div>
	);
};
export default Navbar;
