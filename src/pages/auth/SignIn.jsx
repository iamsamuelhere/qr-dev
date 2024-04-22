import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import {googleSignIn} from '../../services/firebase.js';
const isAuth = (form) => {
  localStorage.setItem('form', JSON.stringify(form));
  return form.email == 'Am3@gmail.com' && form.password == '123' ? true : false;
};
const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  useEffect(()=>{
    const auth = localStorage.getItem('auth');
    if(auth){
      navigate('/dashboard');
    }
  },[])
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '300px',
          minWidth: '200px',
          minHeight: '300px',
          border: '2px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding:"5px"
        }}
      >
        <div>
          <h2 style={{ textAlign: 'center' }}>Log In</h2>
          <form
            onSubmit={() => {
              isAuth(form) ? navigate('/dashboard') : navigate('/sign-in');
            }}
          >
            <Input
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, [e.target.name]: e.target.value });
              }}
            />
            <Input
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, [e.target.name]: e.target.value });
              }}
              type="password"
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button title="SignIn" styles={{ width: '100%' }} />
            </div>
          </form>
          <p>Don't have an account? {<Link to="/sign-up">SignUp</Link>}</p>
          <p>Forgot Password</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button title="SignIn with Google"
              onClick={()=>{
                googleSignIn()
                .then(result=>{
                  
                  localStorage.setItem("auth", JSON.stringify({
                    name:result.displayName,
                    email:result.email,
                    
                  }))
                  navigate('/dashboard')
                }).catch(error=>{
    
                })
              }}
              styles={{ width: '100%' }} />
            </div>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              title="Dummy creds"
              onClick={() => {
                setForm({ email: 'Am3@gmail.com', password: '123' });
              }}
              styles={{ width: '80%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
