import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Navigator } from '../navigator/Navigator';
import { Pictures } from '../../pages/Pictures';
import { Modal } from '../../pages/Modal';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index path="home" element={<Home />} />
        <Route path="pictures" element={<Pictures />}>
          <Route path=":id" element={<Modal />} />
        </Route>
      </Route>
    </Routes>
  );
}
