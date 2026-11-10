import React, { useState } from 'react';
import Visualizador from './Visualizador';

export default function CalculadoraPresupuesto() {
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [horas, setHoras] = useState(0);

  const PRECIO_HORA = 30; // Precio fijo por hora
  const total = (Number(horas) || 0) * PRECIO_HORA;

  const handleNombre = (e) => setNombreProyecto(e.target.value);
  const handleHoras = (e) => setHoras(e.target.value);

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Calculadora de Presupuestos IBEROSTAR</h2>
      
      <div>
        <label htmlFor="proyecto">Nombre del proyecto: </label>
        <input
          id="proyecto"
          type="text"
          value={nombreProyecto}
          onChange={handleNombre}
          placeholder="Ej. Rediseño Web"
        />
      </div>
      <br />
      <div>
        <label htmlFor="horas">Horas de trabajo: </label>
        <input
          id="horas"
          type="number"
          value={horas}
          onChange={handleHoras}
          min="0"
        />
      </div>

      <Visualizador nombreProyecto={nombreProyecto} precioFinal={total} />
    </div>
  );
}