import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {

  let modules=[{

    module_name : "Enterprise Web Development",
    module_lectures : 4,
    module_practicals : 4
  },
  {

    module_name : "DevOps",
    module_lectures : 7,
    module_practicals : 7
  }

]
  return (
    <div>
    <table className="table table-bordered">
<thead>
  <tr>
    <th>Module Name</th>
    <th>No lectures</th>
    <th>No practicals</th>
  </tr>
</thead>
<tbody >
  <tr>
    <td>{modules[0].module_name}</td>
    <td>{modules[0].module_lectures}</td>
    <td>{modules[0].module_practicals}</td>
  </tr>
  <tr>
    <td>{modules[1].module_name}</td>
    <td>{modules[1].module_lectures}</td>
    <td>{modules[1].module_practicals}</td>
  </tr>
</tbody >
</table>

  </div>
  );
};

export default Demo;
