import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';
import {removeFeatureAction} from '../actions/actions'

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature = {props.removeFeatureAction}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  };
};


export default connect(mapStateToProps,{removeFeatureAction})(AddedFeatures);
