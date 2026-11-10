import React from 'react';

export default function Visualizador({ nombreProyecto, precioFinal }) {
  return (
    <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Resumen del Presupuesto</h3>
      <p>Proyecto: <strong>{nombreProyecto || 'Sin especificar'}</strong></p>
      <p>Precio Total: <strong>{precioFinal} €</strong></p>
      {precioFinal > 500 && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>★ Presupuesto Premium</p>
      )}
    </div>
  );
}