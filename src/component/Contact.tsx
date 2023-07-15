import React, { useRef } from "react";
import "../styles/contact.css";
import emailjs from "emailjs-com";

emailjs.init("nzvrj9po8XlbEr_nS");

const Contact: React.FC = () => {
	const form = useRef<HTMLFormElement>(null);


	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (form.current) {
			emailjs
				.sendForm(
					"service_8yk71dy",
					"template_n13lllq",
					form.current,
					"nzvrj9po8XlbEr_nS"
				)
				.then((result) => {
					alert("¡Mensaje enviado con éxito!");
					console.log(result.text);
					
				})
				.catch((error) => {
					console.error("Error al enviar mensaje:", error);
					alert(
						"No se pudo enviar el mensaje. Por favor, inténtelo de nuevo más tarde."
					);
					console.log(error.text);
				});
				form.current.reset();
		}
	};

	return (
		<section className="contact" id="contact">
			<h2 className="heading">
				<span>¡</span> Contáctame <span>!</span>
			</h2>

			<form ref={form} action="#" onSubmit={handleSubmit}>
				<div className="input-box">
					<input
						type="text"
						placeholder="Nombre completo"
						name="from_name"
						id="fullName"
						required
					/>
					<input
						type="email"
						placeholder="Tu dirección de email"
						name="user_email"
						id="email"
						required
					/>
				</div>

				<div className="input-box">
					<input
						type="number"
						placeholder="Número de teléfono móvil"
						name="mobile_number"
						id="mobileNumber"
						required
					/>
					<input
						type="text"
						placeholder="Asunto del email"
						name="email_subject"
						id="emailSubject"
						required
					/>
				</div>
				<textarea
					name="mensaje"
					id="message"
					cols={30}
					rows={10}
					placeholder="Tu mensaje"
					required
				></textarea>
				<input type="submit" value="Enviar email" className="btn" />
			</form>
		</section>
	);
};

export default Contact;

/* 
return (
		<section className="contact" id="contact">
			<h2 className="heading">
			<span>¡</span>Contáctame <span>!</span>
			</h2>

			<form action="#" onSubmit={handleSubmit}>
				<div className="input-box">
					<input type="text" placeholder="Nombre completo" id="fullName" />
					<input type="email" placeholder="Dirección de email" id="email" />
				</div>

				<div className="input-box">
					<input type="number" placeholder="Número de teléfono móvil" id="mobileNumber" />
					<input type="text" placeholder="Asunto del email" id="emailSubject" />
				</div>
				<textarea
					name=""
					id="message"
					cols={30}
					rows={10}
					placeholder="Tu mensaje"
				></textarea>
				<input type="submit" value="Enviar mensaje" className="btn" />
			</form>
		</section>
	);
};

export default Contact;

*/
