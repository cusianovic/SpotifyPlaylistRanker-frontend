import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
      domain="dev-43dibfgl0wzgvp8x.us.auth0.com"
      clientId="ywUJMUpwwehEWs1yO3smHGhGgehkEFhg"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
        <App/>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
