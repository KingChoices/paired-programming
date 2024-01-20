import React from "react";

const ChampDetails = (props) => {
  console.log(props);

  return (
    <div>
      <div>{props.name}</div>
      <div>{props.blurb}</div>
      <div>{props.title}</div>
      {/* <div>{props.}</div> */}
    </div>
  );
};

export default ChampDetails;
