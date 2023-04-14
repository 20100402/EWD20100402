import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = props => {
  const { modules, course } = props;
  
  const list = modules.map((module, index) => {
    return (
      <tr key={index}>
        <td>{module.name}</td>
        <td>{module.noLectures}</td>
        <td>{module.noPracticals}</td>
      </tr>
    );
  });
  return (
    <>
      <h2>{course}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </>
  );
};

export default Demo;
