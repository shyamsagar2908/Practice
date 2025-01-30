import React, { useEffect, useState } from 'react';


function App() {
  const [tableData, setTableData] = useState([
    ['Tiger Nixon', 'System Architect'],
    ['Garrett Winters', 'Accountant'],
    ['Ashton Cox', 'Junior Technical Author'],
    ['Cedric Kelly', 'Senior Javascript Developer'],
    ['Airi Satou', 'Accountant']
  ]);

  useEffect(() => {
    // Initialize DataTable after component has mounted
    const table = $('#myTable').DataTable({
      data: tableData,
      responsive:true,
      columns: [
        { title: "Name" },
        { title: "Position" }
      ]
    });

    // Cleanup DataTable when the component unmounts
    return () => {
      table.destroy(false);
    };
  }, [tableData]); // Runs once after the component is mounted

  return (
    <div>
      <h2>Employee DataTable</h2>
      <table id="myTable" className="display" />
    </div>
  );
}

export default App;
