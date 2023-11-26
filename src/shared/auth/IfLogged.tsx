// src/common/IfLogged.tsx
import { PropsWithChildren } from 'react';
import { isLogged } from './auth.api.ts';

export const IfLogged = (props: PropsWithChildren<any>) => {
  return isLogged() ?
    <>{props.children}</> :
    null;
};

