import React, {useState} from 'react';
import {flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table';
import usePlaylistColumns from '../../hooks/usePlaylistColumns';
import {PlaylistSongDisplay} from '../../types/musicTypes';

interface ComponentProps {
    data: PlaylistSongDisplay[];
}

const PlaylistTable: React.FC<ComponentProps> = ({data}) => {
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const columns = usePlaylistColumns();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className={selectedRowId === row.id ? 'isSelected' : ''} onClick={() => setSelectedRowId(row.id)} onDoubleClick={() => console.log('Play song')}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} onClick={() => console.log(cell)}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
    </div>
  );
};

export default PlaylistTable;
