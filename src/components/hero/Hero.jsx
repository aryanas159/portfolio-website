import React from "react";
import "./hero.css";
import profile from "../../assets/profile.jpg";
import polygon from "../../assets/polygon-scatter.svg";
import logo_linkedin from "../../assets/linkedin.png";
import logo_twitter from "../../assets/twitter.png";
import logo_github from "../../assets/github.png";
import logo_instagram from "../../assets/instagram.png";
const Hero = () => {
	return (
		<div className="hero" id="home">
			<div className="content">
				<div className="content-div">
					<p className="salutation"> Hello, I'm</p>
					<h1>Aryan Singh</h1>
					<p className="description">Web Developer</p>
					<p className="about">
						I am commited to keep learning new skills and become a better
						developer. I love to constantly push myself to learn new things and
						upskill myself.
					</p>
					<div className="socials">
						<a
							href="https://twitter.com/ssaryans597"
							target="_blank"
							className="social"
						>
							<img src={logo_twitter} alt="Twitter" />
						</a>
						<a
							href="https://www.linkedin.com/in/ssaryans159"
							target="_blank"
							className="social"
						>
							<img src={logo_linkedin} alt="Linkedin" />
						</a>
						<a
							href="https://github.com/aryanas159"
							target="_blank"
							className="social"
						>
							<img src={logo_github} alt="Github" />
						</a>
						<a
							href="https://www.instagram.com/ssaryans/?"
							target="_blank"
							className="social"
						>
							<img src={logo_instagram} alt="Instagram" />
						</a>
					</div>
				</div>
			</div>
			<div className="image">
				<div className="profile-img-div">
					<div className="lines"></div>
					<img src={profile} alt="profile" className="profile-img" />
				</div>
				<div className="polygons">
					<img src={polygon} />
				</div>
			</div>
		</div>
	);
};
export default Hero;
