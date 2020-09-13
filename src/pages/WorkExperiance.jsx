import React from "react";
import LoadWorkData from "../components/LoadWorkData";
import WorkData from "../dataFiles/WorkData";

function Work() {
  const data = WorkData.map((item) => (
    <LoadWorkData key={item.id} LoadWorkData={item} />
  ));

  return (
    <React.Fragment>
      <h1>Work Experiance</h1>
      <span>{data}</span>
    </React.Fragment>
  );
}
export default Work;
