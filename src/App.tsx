import React, { Fragment } from 'react';
import MusicControlBar from './components/main-controls/MusicControlBar';
import UtilitiesNavBar from './components/main-controls/UtilitiesNavBar';
import AlbumDiscoveryPane from './components/album-discovery/AlbumDiscoveryPane';

const App: React.FC = () => {

  return (
    <Fragment>
      <UtilitiesNavBar/>
      <AlbumDiscoveryPane/>
      <MusicControlBar/>
    </Fragment>
  );
};

export default App;
