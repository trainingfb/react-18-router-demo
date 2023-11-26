import { useNavigate } from 'react-router-dom';
import { signIn } from '../shared/auth/auth.api.ts';

export const LoginPage = () => {
  const navigate = useNavigate();

  function signInHandler() {
    signIn('pippo', '123');
    navigate('/admin')
  }

  return <div className="mx-auto w-96 flex flex-col gap-2">
    <input type="text" className="w-full"/>
    <input type="text" className="w-full"/>
    <button onClick={signInHandler}>SIGN IN</button>
  </div>
};

