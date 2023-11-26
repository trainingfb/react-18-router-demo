import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { isLogged } from './auth.api.ts';

interface PrivateRouteProps {
  redirectTo: string;
}
export const PrivateRoute = (props: PropsWithChildren<PrivateRouteProps>) => {
  return isLogged() ?
    <div>{props.children}</div> :
    <Navigate to={props.redirectTo} />
};
