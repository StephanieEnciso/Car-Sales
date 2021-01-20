import React from 'react';

const AddedFeature = props => {

  const handleRemoveFeature = (feature) => {
    console.log(feature)
    props.removeFeature(feature);
  }

  return (
    <li key = {props.feature.id}>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick = {handleRemoveFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
