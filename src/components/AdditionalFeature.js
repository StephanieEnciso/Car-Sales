import React from 'react';

const AdditionalFeature = props => {
  
  const handleAddFeature = (feature) => {
    console.log(feature)
    props.addFeature(feature);
  }

  return (
    <li key ={props.feature.id}>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = {handleAddFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
