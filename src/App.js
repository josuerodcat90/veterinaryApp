import React, { useState } from 'react';

import Form from './components/Form';
import Cita from './components/Cita';

function App() {
	const initialCitas = localStorage.getItem('citas');

	const [citas, setCitas] = useState([]);

	const createCita = (cita) => {
		setCitas([...citas, cita]);
	};

	const deleteCita = (id) => {
		const newCitas = citas.filter((cita) => cita.id !== id);
		setCitas(newCitas);
	};

	const title = citas.length === 0 ? 'No Hay Citas' : 'Administra tus citas';

	return (
		<>
			<h1>Administrador de Pacientes</h1>

			<div className='container'>
				<div className='row'>
					<div className='one-half column'>
						<Form createCita={createCita} />
					</div>
					<div className='one-half column'>
						<h2>{title}</h2>
						{citas.map((cita) => (
							<Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
