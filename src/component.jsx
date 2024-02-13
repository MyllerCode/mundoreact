import React, { useState } from 'react';

export default function Component() {
  const [text, setText] = useState('');
  const [update, setUpdate] = useState('');

  const textOnChange = (event) => {
    setText(event.target.value);
  };

  const actualizarTexto = () => {
    // Actualiza el estado 'update' con el valor actual de 'text'
    setUpdate(text);
  };

  return (
    <div>
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={actualizarTexto}>Actualizar</button>
      <p>Texto input: {text}</p>
      <p>Texto actualizar: {update}</p>
    </div>
  );
}
