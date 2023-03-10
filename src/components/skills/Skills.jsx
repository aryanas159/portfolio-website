import React from "react";
import "./skills.css";
import html_logo from "../../assets/html.png";
import css_logo from "../../assets/css.png";
import javascript_logo from "../../assets/javascript.png";
import react_logo from "../../assets/react.png";
import c_logo from '../../assets/c.png'
import cpp_logo from '../../assets/cpp.png'
import git_logo from '../../assets/git.png'
import github_logo from '../../assets/github.png'
import python_logo from '../../assets/python.png'
import npm_logo from '../../assets/npm.png'
import canva_logo from '../../assets/canva.png'
import figma_logo from '../../assets/figma.png'
import affinity_designer_logo from '../../assets/affinity-designer.png'
const Skills = () => {

	return (
		<div className="skills" id="skills">
			<h1>My Skills</h1>
			<div className="container">
				<div className="card-container">
					<div className="card">
						<div className="image-div">
							<img src={html_logo} alt="html" />
							<h2>HTML</h2>
						</div>
						<div className="description">
							<p>
								I can use HTML semantics and accessibility features to make your
								web pages more meaningful and user-friendly for different
								audiences and devices.
							</p>
						</div>
					</div>
				</div>
				<div className="card-container">
					<div className="card">
						<div className="image-div">
							<img src={css_logo} alt="css" />
							<h2>CSS</h2>
						</div>
						<div className="description">
							<p>
								I can make beautiful designs using CSS. I am very well equipped
								with CSS animations, effects, media queries, etc.
							</p>
						</div>
					</div>
				</div>
				<div className="card-container">
					<div className="card">
						<div className="image-div">
							<img src={javascript_logo} alt="javascript" />
							<h2>JavaScript</h2>
						</div>
						<div className="description">
							<p>
								I am profecient in JavaScript. I have an advanced understanding
								of fundamental concepts like variables, conditions, loops,
								functions, arrays, objects, events, DOM manipulation, etc.
							</p>
						</div>
					</div>
				</div>
				<div className="card-container">
					<div className="card">
						<div className="image-div">
							<img src={react_logo} alt="react" />
							<h2>React</h2>
						</div>
						<div className="description">
							<p>
								I can create fully responsive websites using React. I have
								fundamental understanding of concepts such as components, props,
								state, hooks, lifecycle methods, routing, etc.
							</p>
						</div>
					</div>
				</div>
				<div className="more_skills">
					<div className="more_skill">
						<img src={c_logo} alt="c_logo" />
					</div>
					<div className="more_skill">
						<img src={cpp_logo} alt="cpp_logo" />
					</div>
					<div className="more_skill">
						<img src={python_logo} alt="python_logo" />
					</div>
					<div className="more_skill">
						<img src={git_logo} alt="git_logo" />
					</div>
					<div className="more_skill">
						<img src={github_logo} alt="github_logo" />
					</div>
					<div className="more_skill">
						<img src={npm_logo} alt="npm_logo" />
					</div>
					<div className="more_skill">
						<img src={affinity_designer_logo} alt="affinity_designer_logo" />
					</div>
					<div className="more_skill">
						<img src={canva_logo} alt="canva_logo" />
					</div>
					<div className="more_skill">
						<img src={figma_logo} alt="figma_logo" />
					</div>
				</div>
				

			</div>
		</div>
	);
};
export default Skills;
