interface Song {
    filePath: string;
    track: number;
    title: string;
    artist: string;
    albumArtist: string;
    album: string;
    genre: string;
    year: number;
    lyrics: string;
    discNum: string;
    numberOfSongs: number;
}

interface Album {
    album: Song[];
    numberOfAlbums: number;
}

interface Playlist {
    songs: Song[];
    playlistCounter: number;
}

interface PlaylistSongDisplay {
    track: number;
    title: string;
    length: string;
    artist: string;
    albumArtist: string;
    album: string;
    year: number;
    bitRate: string;
    fileType: string;
}

interface SongDisplay {
    track: number;
    title: string;
    length: string;
}
