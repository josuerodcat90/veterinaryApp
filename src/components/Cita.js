import React from 'react';

const Cita = ({
	cita: { id, mascota, propietario, fecha, hora, sintomas },
	deleteCita,
}) => (
	<div className='cita'>
		<p>
			Mascota: <span>{mascota}</span>
		</p>
		<p>
			Dueño: <span>{propietario}</span>
		</p>
		<p>
			Fecha: <span>{fecha}</span>
		</p>
		<p>
			Hora: <span>{hora}</span>
		</p>
		<p>
			Sintómas: <span>{sintomas}</span>
		</p>

		<button
			className='button eliminar u-full-width'
			onClick={() => deleteCita(id)}
		>
			Eliminar &times;
		</button>
	</div>
);

export default Cita;
