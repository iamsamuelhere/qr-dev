import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';
import Menu from './menu/Menu.jsx';

const getUrl = (email) => {
  if (email == null) return;
  console.log('Email::', email);
  const map = {
    email: 'Am3@gmail.com',
    url: 'https://am3.dev/',
  };
  for (const key in map) {
    if (map[key] == email) {
      return map['url'];
    }
  }
};
const Dashboard = () => {
  const navigate = useNavigate();
  const form = localStorage.getItem('form');
  console.log('Form:::', form);

  if (form == null) {
    navigate('/sign-in');
  }

  return (
    <>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1>Dashboard</h1>
      <p> Hello {JSON.parse(form)?.email} !</p>
      <QRCode value={getUrl(JSON.parse(form).email)} />
      </div>
      <Menu/>
    </>
  );
};

export default Dashboard;
