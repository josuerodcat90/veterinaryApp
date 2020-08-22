import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ createCita }) => {
	const [cita, setCita] = useState({
		mascota: '',
		propietario: '',
		fecha: '',
		hora: '',
		sintomas: '',
	});

	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setCita({
			...cita,
			[e.target.name]: e.target.value,
		});
	};

	const { mascota, propietario, fecha, hora, sintomas } = cita;

	const submitCita = (e) => {
		e.preventDefault();

		/// Validate
		if (
			mascota.trim() === '' ||
			propietario.trim() === '' ||
			fecha.trim() === '' ||
			hora.trim() === '' ||
			sintomas.trim() === ''
		) {
			setError(true);
			return;
		}

		/// Assing an ID
		cita.id = uuidv4();

		/// Create the date
		createCita(cita);

		/// Reset Form
		setCita({
			mascota: '',
			propietario: '',
			fecha: '',
			hora: '',
			sintomas: '',
		});
	};

	return (
		<>
			<h2>Crear Cita</h2>

			{error ? (
				<p className='alerta-error'>Todos los campos son obligatorios</p>
			) : null}

			<form onSubmit={submitCita}>
				<label>Nombre Mascota</label>
				<input
					type='text'
					name='mascota'
					className='u-full-width'
					placeholder='Nombre Mascota'
					onChange={handleChange}
					onFocus={() => {
						setError(false);
					}}
					value={mascota}
				/>

				<label>Nombre Dueño</label>
				<input
					type='text'
					name='propietario'
					className='u-full-width'
					placeholder='Nombre dueño de la mascota'
					onChange={handleChange}
					onFocus={() => {
						setError(false);
					}}
					value={propietario}
				/>

				<label>Fecha</label>
				<input
					type='date'
					name='fecha'
					className='u-full-width'
					onChange={handleChange}
					onFocus={() => {
						setError(false);
					}}
					value={fecha}
				/>

				<label>Hora</label>
				<input
					type='time'
					name='hora'
					className='u-full-width'
					onChange={handleChange}
					onFocus={() => {
						setError(false);
					}}
					value={hora}
				/>

				<label>Síntomas</label>
				<textarea
					name='sintomas'
					className='u-full-width'
					onChange={handleChange}
					onFocus={() => {
						setError(false);
					}}
					value={sintomas}
				></textarea>

				<button type='submit' className='u-full-width button-primary'>
					Agregar Cita
				</button>
			</form>
		</>
	);
};

export default Form;
