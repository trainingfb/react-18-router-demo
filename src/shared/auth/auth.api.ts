
export function signIn(user: string, pass: string) {
  localStorage.setItem('token', '123');
  localStorage.setItem('role', 'admin');
  /*localStorage.setItem('user', user);
  localStorage.setItem('pass', pass);*/
}
export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('role');

}

export function isLogged(): boolean {
  return !!localStorage.getItem('token')
}
