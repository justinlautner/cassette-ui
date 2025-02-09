import React from 'react';
import {PlaylistSongDisplay} from '../../types/musicTypes';
import PlaylistTable from './PlaylistTable';

const PlaylistView: React.FC = () => {
  const testPlaylistSongDisplay: PlaylistSongDisplay[] = [
    {
      track: 1,
      title: 'Test Song',
      length: '3:45',
      artist: 'Test Artist',
      albumArtist: 'Test Album Artist',
      album: 'Test Album',
      year: 2023,
      bitRate: '320kbps',
      fileType: 'mp3',
    },
    {
      track: 2,
      title: 'Another Test Song',
      length: '4:20',
      artist: 'Another Artist',
      albumArtist: 'Another Album Artist',
      album: 'Another Album',
      year: 2022,
      bitRate: '256kbps',
      fileType: 'flac',
    },
    {
      track: 3,
      title: 'Third Test Song',
      length: '5:10',
      artist: 'Third Artist',
      albumArtist: 'Third Album Artist',
      album: 'Third Album',
      year: 2021,
      bitRate: '192kbps',
      fileType: 'wav',
    }
  ]
  return (
    <PlaylistTable data={testPlaylistSongDisplay} />
    // <table className="table">
    //   <thead>
    //     <tr>
    //       <th>Name</th>
    //       <th>Number of Songs</th>
    //       <th>Duration</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {testSongs.map((song, index) => (
    //       <tr key={index}>
    //         <td>{song.title}</td>
    //         <td>{song.numberOfSongs}</td>
    //         <td>{song.albumArtist}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};

export default PlaylistView;
