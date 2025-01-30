import React, { useState } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net";
import "datatables.net-responsive-dt";

// Initialize DataTables
// DataTable.use(DT);

function App() {
  
  return (
    <div>
      <h2>Employee DataTable with Publish Toggle</h2>
      <DataTable
        data={tableData}
        columns={[
          { title: "Name" },
          { title: "Position" },
          { title: "Office" },
          { title: "Age" },
          { title: "Start date" },
          { title: "Salary" },
          {
            title: "Publish", // Add a "Publish" column
            render: (row, type, set) => {
              const index = set.rowIndex; // Get the row index
              return (
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={tableData[index][6]}
                    onChange={() => handleToggleChange(index)} // Call the function on change
                  />
                  <span className="slider round"></span>
                </label>
              );
            },
          },
        ]}
        className="display"
        options={{
          responsive: true,
        }}
      />
    </div>
  );
}

export default App;