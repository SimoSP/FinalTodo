/// Simo Partanen 1900414
/// App.js itself is quite empty and it start with importing providers from navigation.
/// This is a quite excellent way to handle app structure and navigation and build the app with components instead of in the app.js itself.

import React from 'react';
import Providers from './navigation';

const App = () => {
  return <Providers/>;
}
 
export default App;
