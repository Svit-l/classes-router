import { useState, useEffect } from 'react';
import { SerchBar } from 'components/SerchBar/SerchBar';
import { fetchImages } from 'services/picturesAPI';
import { PicturesList } from 'components/PicturesList/PicturesList';

export function Pictures() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchImages(query);
      setData(response.data.hits);
    })();

    console.log(query);
  }, [query]);

  const onSubmit = value => {
    setQuery(value);
  };

  return (
    <>
      <h1>Pictures</h1>
      <SerchBar onSubmit={onSubmit} />
      <PicturesList pictures={data} />
    </>
  );
}
