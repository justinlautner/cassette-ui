import {ColumnDef, createColumnHelper} from "@tanstack/react-table";
import {PlaylistSongDisplay} from "../types/musicTypes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const usePlaylistColumns = (): ColumnDef<PlaylistSongDisplay, any>[] => {
  const columnHelper = createColumnHelper<PlaylistSongDisplay>();
  return ([
    columnHelper.accessor('track', {
      header: 'Track',
    }),
    columnHelper.accessor('title', {
      header: 'Title',
    }),
    columnHelper.accessor('length', {
      header: 'Length',
    }),
    columnHelper.accessor('artist', {
      header: 'Artist',
    }),
    columnHelper.accessor('albumArtist', {
      header: 'Album Artist',
    }),
    columnHelper.accessor('album', {
      header: 'Album',
    }),
    columnHelper.accessor('year', {
      header: 'Year',
    }),
    columnHelper.accessor('bitRate', {
      header: 'Bit Rate',
    }),
    columnHelper.accessor('fileType', {
      header: 'File Type',
    })
    
  ]);
};

export default usePlaylistColumns;
