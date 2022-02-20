import { Link, Outlet, useLocation } from 'react-router-dom';

export const PicturesList = ({ pictures }) => {
  const location = useLocation();

  console.log(pictures);
  return (
    <ul>
      {pictures.map(picture => {
        const { webformatURL, id, tags, largeImageURL } = picture;
        return (
          <li key={id}>
            <Link
              to={{ pathname: `${id}` }}
              state={{ largeImageURL, from: location }}
            >
              <img src={webformatURL} alt={tags} width="300" height="200" />
            </Link>
          </li>
        );
      })}
      <Outlet />
    </ul>
  );
};
