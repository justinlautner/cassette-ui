import React, {Fragment} from 'react';
import MusicControlBar from './components/main-controls/MusicControlBar';
import UtilitiesNavBar from './components/main-controls/UtilitiesNavBar';
import AlbumDiscoveryPane from './components/album-discovery/AlbumDiscoveryPane';
import {MusicDisplayType} from './types/musicTypes';
import PlaylistView from './components/playlist-view/PlaylistView';

const App: React.FC = () => {
  const [musicDisplayType, setMusicDisplayType] = React.useState<MusicDisplayType>(MusicDisplayType.ALBUMS);

  return (
    <Fragment>
      <UtilitiesNavBar/>
      {musicDisplayType === MusicDisplayType.ALBUMS
        ?
        <AlbumDiscoveryPane/>
        :
        <PlaylistView/>}
      <MusicControlBar
        musicDisplayType={musicDisplayType}
        setMusicDisplayType={setMusicDisplayType}
      />
    </Fragment>
  );
};

export default App;
