/// Simo Partanen 1900414
/// Index component imports authprovider and routes from their files.

import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';
 
const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
 
export default Providers;