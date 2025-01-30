import React, { useState, useEffect } from "react";
import DataTable from "datatables.net-react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-responsive";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";

function App() {
  // Initial table data with publish status
  const [tableData, setTableData] = useState([
    ["John Doe", "Software Engineer", "New York", 30, "2021-01-15", "$75,000", false],
    ["Jane Smith", "Product Manager", "San Francisco", 35, "2019-06-20", "$95,000", true],
    ["Mike Johnson", "Designer", "Chicago", 28, "2022-03-10", "$65,000", false],
    // Add more data as needed
  ]);

  // Handle toggle change for publish status
  const handleToggleChange = (index) => {
    const updatedData = [...tableData];
    updatedData[index][6] = !updatedData[index][6];
    console.log("hii") ;// Toggle publish status
    setTableData(updatedData);
  };

  // Initialize DataTable after component mount
  useEffect(() => {
    if (!$.fn.DataTable.isDataTable('#employeeTable')) {
      $('#employeeTable').DataTable({
        responsive: true,
        // Additional configuration options
        columnDefs: [
          { 
            targets: -1, 
            orderable: false // Disable sorting for the last column
          }
        ]
      });
    }
  }, [tableData]);

  return (
    <div className="container">
      <h2>Employee DataTable with Publish Toggle</h2>
      
      <table id="employeeTable" className="display responsive" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start Date</th>
            <th>Salary</th>
            <th>Publish</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {row.slice(0, 6).map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
              <td>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={row[6]}
                    onChange={() => handleToggleChange(index)}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;