import { NavLink, Outlet } from 'react-router-dom';

export default function AdminRoot() {
  return <div>
    <h1>Admin</h1>
    <NavLink to="page1">Page1</NavLink>
    <NavLink to="page2">Page2</NavLink>
    <hr/>
    <Outlet />
  </div>
}
