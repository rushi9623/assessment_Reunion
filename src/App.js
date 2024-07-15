import React, { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DataTable from './components/DataTable/DataTable';
import './App.css';

function App() {
  const [columns, setColumns] = useState([
    { name: 'Column 1', visible: true },
    { name: 'Column 2', visible: true },
    { name: 'Column 3', visible: true }
  ]);

  const toggleColumn = (index) => {
    const newColumns = [...columns];
    newColumns[index].visible = !newColumns[index].visible;
    setColumns(newColumns);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar columns={columns} toggleColumn={toggleColumn} />
        <DataTable columns={columns} />
      </div>
    </div>
  );
}

export default App;
