import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [submitStatus, setSubmitStatus] = React.useState(false);
	console.log(form.current);
	const sendEmail = (e) => {
		setSubmitStatus(true)
		e.preventDefault();
		emailjs
			.sendForm(
				"service_opd3vb8",
				"template_g4itzh2",
				form.current,
				"ko5VcLfHmHXM0QfcL"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		setName("");
		setEmail("");
		setMessage("");
		setTimeout(() => {setSubmitStatus(false)}, 5000);
	};
	return (
		<div className="contact" id="contact">
			<h2>Contact me </h2>
			<form ref={form} onSubmit={sendEmail}>
				<input
					type="text"
					className="name"
					placeholder="Full Name"
					name="from_name"
					onChange={(e) => setName(e.target.value)}
					value={name}
					required
				/>
				<input
					type="email"
					className="email"
					placeholder="Email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
				<textarea
					cols="30"
					rows="10"
					className="message"
					placeholder="Message"
					name="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				></textarea>
				{submitStatus ? (
					<div className="status">You message was sent successfully</div>
				) : (
					<></>
				)}

				<button className="send" type="submit">
					Send Message
				</button>
			</form>
		</div>
	);
};
export default Contact;
