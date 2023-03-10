import React from "react";
import "./about.css";
import podcast_founders from "../../assets/podcast_founders.jpg";
import podcast_modern_wisdom from "../../assets/podcast_modern-wisdom.jpg";
import podcast_joe_rogan from "../../assets/podcast_joe-rogan.jpg";
import podcast_jordan_peterson from "../../assets/podcast_jordan-peterson.jpg";
import podcast_lex_fridman from "../../assets/podcast_lex-fridman.jpg";
const About = () => {
	return (
		<div className="about" id="about">
			<h1>About me</h1>
			<p className="intoduction">
				I am Aryan Singh and I am a Front End Web Developer. I am current
				persuing my Bachelors in Computer Science and Engineering from MNIT
				Jaipur, Rajasthan.
			</p>
			<p>
				My hobbies include working out, watching Anime, listening to podcasts
				and watching YouTube videos.
			</p>
			<div className="favourite-podcasts">
				<h3>Podcasts I listen to</h3>
				<div className="container">
					<div className="podcast">
						<a href="https://open.spotify.com/show/7txiovdzPARhjm18NwMUYj?si=a8a3d06c5a4748fd" target="_blank">
							<img src={podcast_founders} alt="Founders Podcast" />
						</a>
					</div>
					<div className="podcast">
						<a href="https://open.spotify.com/show/0XrOqvxlqQI6bmdYHuIVnr?si=2a944d241eb04f9c" target="_blank">
							<img src={podcast_modern_wisdom} alt="Modern Wisdom Podcast" />
						</a>
					</div>
					<div className="podcast">
						<a href="https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk?si=ee8b22ec37e14ff9" target="_blank">
							<img src={podcast_joe_rogan} alt="Joe Rogan's Podcast" />
						</a>
					</div>
					<div className="podcast">
						<a href="https://www.youtube.com/@JordanBPeterson/featured" target="_blank">
							<img src={podcast_jordan_peterson} alt="Jordan Peterson's Podcast" />
						</a>
					</div>
					<div className="podcast">
						<a href="https://www.youtube.com/@lexfridman" target="_blank">
							<img src={podcast_lex_fridman} alt="Lex Fridman's Podcast" />
						</a>
					</div>
				</div>
			</div>

			<div className="container"></div>
		</div>
	);
};
export default About;
