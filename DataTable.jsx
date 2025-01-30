import React, { useEffect } from "react";
import edit from '../assets/edit-svgrepo-com.svg';

const DTable = () => {
  const data = [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "5421",
      startDate: "2011/04/25",
      salary: "$3,120",
      publish: `<label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>`,
      email: `<img src="${edit}" alt="Edit Icon" width="20" height="20"/>` // Render image directly
    },
  ];

  useEffect(() => {
    // Initialize DataTable after the component mounts
    const table = $('#myTable').DataTable({
      data: data.map(item => [
        item.name,
        item.position,
        item.office,
        item.age,
        item.startDate,
        item.salary,
        item.publish, // We will use render to ensure this is interpreted as HTML
        item.email,  // This contains the image tag
      ]),
      responsive: true,
      columns: [
        { title: "Name" },
        { title: "Position" },
        { title: "Office" },
        { title: "Age" },
        { title: "Start Date" },
        { title: "Salary" },
        {
          title: "Publish",
          render: function(data, type, row) {
            return data; // DataTables will now render the HTML tag
          }
        },
        {
          title: "Email",
          render: function(data, type, row) {
            return data; // Render the image tag correctly
          }
        },
      ]
    });

    // Cleanup DataTable when the component unmounts to avoid memory leaks
    return () => {
      table.destroy(false);
    };
  }, []);

  return (
    <div>
      <h2>Employee DataTable</h2>
      {/* Table is empty initially; DataTable will populate it */}
      <table id="myTable" className="display" />
    </div>
  );
};

export default DTable;
