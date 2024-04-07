import SignIn from './SignIn.jsx';
import Dashboard from '../dashboard/Dashboard.jsx';
const Auth = () => {
  const isAuthenticated = false;
  return isAuthenticated ? <Dashboard /> : <SignIn />;
};

export default Auth;
