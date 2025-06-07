import React from 'react';

type Props = {
  data: any[];
};

const Table = ({ data }: Props) => {
  if (!data || data.length === 0) return <p>No data</p>;

  const headers = Object.keys(data[0]);

  return (
    <table className="table-auto border-collapse border  border-gray-300 w-full">
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="border px-4 py-2 bg-gray-100 text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {headers.map((header, k) => (
              <td key={k} className="border px-4 py-2">
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
