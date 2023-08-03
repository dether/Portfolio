import React, { useRef, useState } from "react";
import "../styles/contact.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const id = import.meta.env.VITE_ID;
const service = import.meta.env.VITE_SERVICE;
const template = import.meta.env.VITE_TEMPLATE;

emailjs.init(id);

interface FormErrors {
  fullName: string;
  email: string;
  mobileNumber: string;
  emailSubject: string;
  message: string;
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [errors, setErrors] = useState<FormErrors>({
    fullName: "",
    email: "",
    mobileNumber: "",
    emailSubject: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (form.current) {
			const formElements = Array.from(form.current.elements) as HTMLInputElement[];
	
			// Creamos un objeto temporal para almacenar los errores
			let tempErrors: FormErrors = {
				fullName: "",
				email: "",
				mobileNumber: "",
				emailSubject: "",
				message: "",
			};
	
			// Validar cada campo y almacenar los errores en el objeto temporal
			formElements.forEach((element) => {
				if (element.name === "from_name" && element.value.trim() === "") {
					tempErrors.fullName = "Agrega un nombre";
				}
				if (element.name === "user_email") {
					const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
					if (element.value.trim() === "") {
						tempErrors.email = "Agrega una dirección de email";
					} else if (!emailRegex.test(element.value)) {
						tempErrors.email = "Dirección de email inválido";
					}
				}
				if (element.name === "mobile_number") {
					const mobileRegex = /^\+\d{8,}$/;
					if (element.value.trim() === "") {
						tempErrors.mobileNumber = "Agrega un número de teléfono móvil";
					} else if (!mobileRegex.test(element.value)) {
						tempErrors.mobileNumber = "Número de teléfono móvil inválido";
					}
				}
				if (element.name === "email_subject" && element.value.trim() === "") {
					tempErrors.emailSubject = "Agrega un asunto del email";
				}
				if (element.name === "mensaje") {
					if (element.value.trim() === "") {
						tempErrors.message = "Agrega un mensaje";
					} else if (element.value.length > 100) {
						tempErrors.message = "El mensaje no debe superar los 100 caracteres";
					}
				}
			});
	
			// Actualizamos el estado con todos los errores al final de la validación
			setErrors(tempErrors);
	
			// Verificamos si hay algún error para detener el envío del formulario
			const hasErrors = Object.values(tempErrors).some((error) => error !== "");
			if (hasErrors) {
				return;
			}
	
			handleFormSubmit();
		}
	};

  const handleFormSubmit = () => {
    if (form.current) {
      emailjs
        .sendForm(service, template, form.current, id)
        .then((result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            iconColor: "#00ff00",
            title: "¡Mensaje enviado con éxito!",
            showConfirmButton: false,
            timer: 2500,
            customClass: {
              popup: "swal-custom-style",
            },
          });
          console.log(result.text);
        })
        .catch((error) => {
          console.error("Error al enviar mensaje:", error);
          Swal.fire({
            position: "center",
            icon: "error",
            iconColor: "var(--main-color)",
            title: "Error, no se pudo enviar el mensaje.",
            showConfirmButton: false,
            timer: 2500,
            customClass: {
              popup: "swal-custom-style",
            },
          });
          console.log(error.text);
        });
      form.current.reset();
    }
  };

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const name = event.target.name;
		const value = event.target.value;

    switch (name) {
			case "from_name":
				setErrors((prevErrors) => ({
					...prevErrors,
					fullName: value.trim() === "" ? "Agrega un nombre" : "",
				}));
				break;
	
			case "user_email":
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				setErrors((prevErrors) => ({
					...prevErrors,
					email: value.trim() === "" ? "Agrega una dirección de email" : emailRegex.test(value) ? "" : "Dirección de email inválido",
				}));
				break;
	
			case "mobile_number":
				const mobileRegex = /^\+\d{8,}$/;
				setErrors((prevErrors) => ({
					...prevErrors,
					mobileNumber: value.trim() === "" ? "Agrega un número de teléfono con código de área" : mobileRegex.test(value) ? "" : "Número de teléfono móvil inválido",
				}));
				break;
	
			case "email_subject":
				setErrors((prevErrors) => ({
					...prevErrors,
					emailSubject: value.trim() === "" ? "Agrega un asunto del email" : "",
				}));
				break;
	
			case "mensaje":
				setErrors((prevErrors) => ({
					...prevErrors,
					message: value.trim() === "" ? "Agrega un mensaje" : value.length > 100 ? "El mensaje no debe superar los 100 caracteres" : "",
				}));
				break;
	
			default:
				break;
		}
	};

  // Habilitar el botón si todos los campos están completos y sin errores de validación
  React.useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error !== "");
    setButtonDisabled(hasErrors);
  }, [errors]);

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contáctame <span>!</span>
      </h2>

      <div className="contactt">
        <form ref={form} action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <div className="input-container">
              <input
                type="text"
                placeholder="Nombre completo"
                name="from_name"
                id="fullName"

                onChange={handleChange}
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder="Dirección de email"
                name="user_email"
                id="email"

                onChange={handleChange}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="input-box">
            <div className="input-container">
              <input
                type="text"
                placeholder="Número de teléfono móvil"
                name="mobile_number"
                id="mobileNumber"

                onChange={handleChange}
              />
              {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Asunto del email"
                name="email_subject"
                id="emailSubject"

                onChange={handleChange}
              />
              {errors.emailSubject && <span className="error-message">{errors.emailSubject}</span>}
            </div>
          </div>

          
            <textarea
              name="mensaje"
              id="message"
              cols={30}
              rows={10}
              placeholder="Tu mensaje"

              onChange={handleChange}
            />
            {errors.message && <span className="error-message-textarea">{errors.message}</span>}
          

						<input
            type="submit"
            value="Enviar email"
            className={`btn ${isButtonDisabled ? "btn-disabled" : ""}`}
            disabled={isButtonDisabled}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;


/* import React, { useRef } from "react";
import "../styles/contact.css";
import emailjs from "emailjs-com";
const id = import.meta.env.VITE_ID;
const service = import.meta.env.VITE_SERVICE;
const template = import.meta.env.VITE_TEMPLATE;
import Swal from 'sweetalert2'

emailjs.init(id);

const Contact: React.FC = () => {
	const form = useRef<HTMLFormElement>(null);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (form.current) {
			emailjs
				.sendForm(
					service,
					template,
					form.current,
					id
				)
				.then((result) => {
					Swal.fire({
						position: 'center',
						icon: 'success',
						iconColor: '#00ff00',
						title: '¡Mensaje enviado con éxito!',
						showConfirmButton: false,
						timer: 2500,
						customClass: {
							popup: 'swal-custom-style'
						}
					})
					console.log(result.text);
				})
				.catch((error) => {
					console.error("Error al enviar mensaje:", error);
					Swal.fire({
						position: 'center',
						icon: 'error',
						iconColor: 'var(--main-color)',
						title: 'Error, no se pudo enviar el mensaje.',
						showConfirmButton: false,
						timer: 2500,
						customClass: {
							popup: 'swal-custom-style'
						}
					})
					console.log(error.text);
				});
				form.current.reset();
		}
	};

	return (
		<section className="contact" id="contact">
			<h2 className="heading">
				Contáctame <span>!</span>
			</h2>

		<div className="contactt">

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
						placeholder="Dirección de email"
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
			</div>
		</section>
	);
};

export default Contact;

 */
