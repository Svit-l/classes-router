import { useLocation, useNavigate } from 'react-router-dom';

export function Modal() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  const onClose = () => {
    navigate(location.state.from);
  };

  return (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '500' }}>
      <button type="button" onClick={onClose}>
        Close
      </button>
      <img src={location?.state?.largeImageURL} alt="" width="500" />
    </div>
  );
}
