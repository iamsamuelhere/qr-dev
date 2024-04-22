import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';
import Menu from './menu/Menu.jsx';
import { useEffect } from 'react';

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
const map = [
  {
    email:"iamsamuelhere@gmail.com",
    endpoint:"https://www.google.com"
  }
]
const checkRegisteredEmail = (email)=>{
  const present = map.filter(element=>{
    if(email == element.email){
      return element;
    }
  })
  if(present.length ==0){return false;} else return true;
}
const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    const authStore = localStorage.getItem('auth');
    const authStoreParsed = JSON.parse(authStore);

    if(authStore == null)
    navigate('/sign-in');

   const isRegistered =  checkRegisteredEmail(authStoreParsed?.email);
   if(!isRegistered){
    navigate("/sign-in");
    localStorage.removeItem('auth');
   }
  },[])

  return (
    <>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1>Dashboard</h1>
      {/* <p> Hello {JSON.parse(form)?.email} !</p>
      <QRCode value={getUrl(JSON.parse(form).email)} /> */}
      </div>
      <Menu/>
    </>
  );
};

export default Dashboard;
