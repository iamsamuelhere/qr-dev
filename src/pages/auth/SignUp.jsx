import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
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
        }}
      >
        <div>
          <h2 style={{ textAlign: 'center' }}>Sign up</h2>
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
            <Button
              title="SignIn"
              onClick={() => {
                navigate('/home');
              }}
              styles={{ width: '80%' }}
            />
          </div>
          <p>Have an account? {<Link to="/sign-in">SignIn</Link>}</p>
          <p>Forgot Password</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              title="Dummy creds"
              onClick={() => {
                setForm({ email: 'test.com', password: '123' });
              }}
              styles={{ width: '80%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
