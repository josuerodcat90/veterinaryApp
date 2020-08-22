import React, { useState } from 'react';

import Form from './components/Form';
import Cita from './components/Cita';

function App() {
	const [citas, setCitas] = useState([]);

	const createCita = (cita) => {
		setCitas([...citas, cita]);
	};

	return (
		<>
			<h1>Administrador de Pacientes</h1>

			<div className='container'>
				<div className='row'>
					<div className='one-half column'>
						<Form createCita={createCita} />
					</div>
					<div className='one-half column'>
						<h2>Administra tus Citas</h2>
						{citas.map((cita) => (
							<Cita key={cita.id} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
