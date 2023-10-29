import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./LoginPage"
import HomePage from "./HomePage";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

const Index = () => {

    const { isAuthenticated, isLoading } = useAuth0();

    if(isLoading) return(<></>)
    if(!isAuthenticated) return(<LoginPage/>);
    return(<HomePage/>)
}
export {LogoutButton, LoginButton}
export default Index