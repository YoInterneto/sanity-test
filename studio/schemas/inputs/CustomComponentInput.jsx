import React from 'react';

const CustomComponentInput = ({ type, name }) => {
    console.log('holaaaaaa')
    console.log({ type, name })
  switch (type) {
    case 'text':
      return <input type='text' name={name} />;
    case 'number':
      return <input type='number' name={name} />;
    case 'boolean':
      return <input type='text' name={name} />;
    // Agrega más casos según los tipos de campos que quieras manejar
    default:
      return null;
  }
};

export default CustomComponentInput;
