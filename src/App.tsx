import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { logout } from './shared/auth/auth.api.ts';
import { IfLogged } from './shared/auth/IfLogged.tsx';

function App() {
  const navigate = useNavigate();
  function logoutHandler() {
    logout()
    navigate('login')
  }

  return (
    <>
      <div className="flex gap-2 justify-center my-5">
        <NavLink className="navlink" to="home">Home</NavLink>
        <NavLink className="navlink" to="demo">Demo</NavLink>
        <NavLink className="navlink" to="products">Products</NavLink>
        <NavLink className="navlink" to="login">Login</NavLink>
        <IfLogged>
          <NavLink className="navlink" to="admin">Admin</NavLink>
        </IfLogged>
        <button className="navlink" onClick={logoutHandler}>Logout</button>
      </div>
      <Outlet />

    </>
  )
}

export default App
