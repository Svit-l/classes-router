import { useState } from 'react';

export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handlerInput = e => {
    const { value } = e.target;
    setQuery(value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input onChange={handlerInput} value={query} />
      <button type="submit">Search</button>
    </form>
  );
}
