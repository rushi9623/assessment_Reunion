import React, { useState } from 'react';
import MaterialReactTable from 'material-react-table';
import sampleData from '../../sample-data.json';

const DataTable = () => {
  const [data, setData] = useState(sampleData);
  const columns = [
    {
      Header: 'Category',
      accessor: 'category',
    },
    {
      Header: 'Subcategory',
      accessor: 'subcategory',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Price',
      accessor: 'price',
      Cell: ({ value }) => `$${value.toFixed(2)}`,
    },
    {
      Header: 'Created At',
      accessor: 'createdAt',
      Cell: ({ value }) => new Date(value).toLocaleString(),
    },
    {
      Header: 'Updated At',
      accessor: 'updatedAt',
      Cell: ({ value }) => new Date(value).toLocaleString(),
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      // Add props for sorting, filtering, etc.
    />
  );
};

export default DataTable;
