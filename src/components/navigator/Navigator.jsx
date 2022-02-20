import { Outlet, NavLink } from 'react-router-dom';

export function Navigator() {
  return (
    <>
      <nav>
        <NavLink to="home">Home</NavLink>

        <NavLink to="pictures">Pictures</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
