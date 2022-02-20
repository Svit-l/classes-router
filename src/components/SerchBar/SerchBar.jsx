import { useState } from 'react';

export function SerchBar({ onSubmit }) {
  const [qwery, setQwery] = useState('');

  const handlerImput = e => {
    const { value } = e.target;
    setQwery(value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    onSubmit(qwery);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input onChange={handlerImput} value={qwery} />
      <button type="submit">Serch</button>
    </form>
  );
}
